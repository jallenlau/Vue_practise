<template>
  <section>
    <coach-filter @filter-change="setFilter"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadCoachesABC">Refresh</base-button>
        <base-button v-if="!isCoach" link to="/register"
          >Register as Coach</base-button
        >
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filterdCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :areas="coach.areas"
          :hourlyRate="coach.hourlyRate"
        ></coach-item>
      </ul>
      <h3 v-else>Not Coaches found.</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import BaseSpinner from '../../components/ui/BaseSpinner.vue';

export default {
  data() {
    return {
      isLoading: false,
      filterdCoach: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  components: {
    CoachItem,
    CoachFilter,
    BaseSpinner,
  },
  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
    filterdCoaches() {
      const allCoached = this.$store.getters['coaches/coaches'];
      return allCoached.filter((coach) => {
        if (this.filterdCoach.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.filterdCoach.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.filterdCoach.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
  methods: {
    setFilter(updateFilter) {
      this.filterdCoach = updateFilter;
    },
    async loadCoachesABC() {
      this.isLoading = true;
      await this.$store.dispatch('coaches/loadCoaches');
      this.isLoading = false;
    },
  },
  created() {
    this.loadCoachesABC();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
