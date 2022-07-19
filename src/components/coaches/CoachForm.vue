<template>
  <section>
    <form @submit.prevent="submit">
      <div class="form-control" :class="{ invalid: !firstName.valid }">
        <label for="firstName">FirstName</label>
        <input
          type="text"
          id="firstName"
          v-model.trim="firstName.value"
          @blur="changeToValid('firstName')"
        />
        <p v-if="!firstName.valid">Re-enter</p>
      </div>
      <div class="form-control" :class="{ invalid: !lastName.valid }">
        <label for="lastName">LastName</label>
        <input
          type="text"
          id="lastName"
          v-model.trim="lastName.value"
          @blur="changeToValid('lastName')"
        />
        <p v-if="!lastName.valid">Re-enter</p>
      </div>
      <div class="form-control" :class="{ invalid: !rate.valid }">
        <label for="rate">Rate</label>
        <input
          type="number"
          id="rate"
          v-model.number="rate.value"
          @blur="changeToValid('rate')"
        />
        <p v-if="!rate.valid">Re-enter</p>
      </div>
      <div class="form-control" :class="{ invalid: !description.valid }">
        <label for="description">Description</label>
        <textarea
          id="description"
          rows="5"
          v-model.trim="description.value"
          @blur="changeToValid('description')"
        ></textarea>
        <p v-if="!description.valid">Re-enter</p>
      </div>
      <div class="form-control" :class="{ invalid: !areas.valid }">
        <h3>Areas of Expertise</h3>
        <div>
          <input
            type="checkbox"
            id="frontend"
            value="frontend"
            v-model="areas.value"
            @blur="changeToValid('areas')"
          />
          <label for="frontend">Frontend</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="backend"
            value="backend"
            v-model="areas.value"
            @blur="changeToValid('areas')"
          />
          <label for="backend">Backend</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="career"
            value="career"
            v-model="areas.value"
            @blur="changeToValid('areas')"
          />
          <label for="career">Career</label>
        </div>
        <p v-if="!areas.valid">Re-choose</p>
      </div>
      <p v-if="!formIsValid">Please try again.</p>
      <base-button>Register</base-button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ['submit-coach'],
  data() {
    return {
      firstName: {
        value: '',
        valid: true,
      },
      lastName: {
        value: '',
        valid: true,
      },
      areas: {
        value: [],
        valid: true,
      },
      description: {
        value: '',
        valid: true,
      },
      rate: {
        value: null,
        valid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    changeToValid(payload) {
      this[payload].valid = true;
    },
    formValidMethod() {
      this.formIsValid = true;
      if (this.firstName.value === '') {
        this.firstName.valid = false;
        this.formIsValid = false;
      }
      if (this.lastName.value === '') {
        this.lastName.valid = false;
        this.formIsValid = false;
      }
      if (this.areas.value.length === 0) {
        this.areas.valid = false;
        this.formIsValid = false;
      }
      if (this.description === '') {
        this.description.valid = false;
        this.formIsValid = false;
      }
      if (!this.rate.value || this.rate.value < 0) {
        this.rate.valid = false;
        this.formIsValid = false;
      }
    },
    submit() {
      this.formValidMethod();

      if (!this.formIsValid) {
        return;
      }

      const registerCoach = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        areas: this.areas.value,
        description: this.description.value,
        rate: this.rate.value,
      };
      this.$emit('submit-coach', registerCoach);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
