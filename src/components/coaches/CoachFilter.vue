<template>
  <base-card>
    <h2>Find your coach</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="filterChange" />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="filterChange" />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="filterChange" />
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['filter-change'],
  data() {
    return {
      filterdCoach: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    filterChange(event) {
      console.log('a');
      const filterId = event.target.id;
      const isActived = event.target.checked;
      const updateFilter = {
        ...this.filterdCoach,
        [filterId]: isActived,
      };
      this.filterdCoach = updateFilter;
      this.$emit('filter-change', updateFilter);
    }
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
