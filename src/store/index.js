import { createStore } from 'vuex';

import coachesModule from './coaches/index';
import registerModule from './register/index';

const store = createStore({
  modules: {
    coaches: coachesModule,
    register: registerModule,
  },
});

export default store;
