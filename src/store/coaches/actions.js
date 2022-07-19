export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.getRootId;
    const register = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      hourlyRate: payload.rate,
      areas: payload.areas,
      description: payload.description,
    };

    const response = await fetch(
      `https://test-2146b-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(register),
      }
    );

    if (!response.ok) {
      //...
    }

    context.commit('registerCoach', {
      ...register,
      id: userId,
    });
  },

  async loadCoaches(context) {
    const response = await fetch(
      `https://test-2146b-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      //...
    }

    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        hourlyRate: responseData[key].rate,
        areas: responseData[key].areas,
        description: responseData[key].description,
      };
      coaches.push(coach);
    }

    context.commit('loadCoaches', coaches);
  },
};
