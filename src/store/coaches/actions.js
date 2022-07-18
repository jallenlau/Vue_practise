export default {
  registerCoach(context, payload) {
    const register = {
      id: context.rootGetters.getRootId,
      firstName: payload.firstName,
      lastName: payload.lastName,
      hourlyRate: payload.rate,
      areas: payload.areas,
      description: payload.description,
    };
    context.commit('registerCoach', register);
  }
}