export default {
  getRequests(state) {
    return state.requests;
  },
  hasRequests(state) {
    return state.requests && state.requests.length > 0;
  },
  // getRequests(state, _, _2, rootGetters) {
  //   const cId = rootGetters.getRootId;
  //   return state.requests.filter((req) => req.coachId === cId);
  // },
  // hasRequests(_, getters) {
  //   return getters.requests && getters.requests.length > 0;
  // },
};
