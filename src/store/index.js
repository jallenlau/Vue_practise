import { createStore } from 'vuex';

import coachesModule from './coaches/index';
import registerModule from './register/index';

const store = createStore({
  modules: {
    coaches: coachesModule,
    register: registerModule,
  },
  state() {
    return {
      id: 'c3',
    }
  },
  getters: {
    getRootId(state) {
      return state.id;
    }
  }
});

export default store;
