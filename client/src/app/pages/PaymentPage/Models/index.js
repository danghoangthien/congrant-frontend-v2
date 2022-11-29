import store from 'appRedux/store';

const INITIAL_STATE = {
  active: '1',
  method: '1',
};

const paymentStep = {
  name: 'paymentStep',
  state: INITIAL_STATE, // initial state
  reducers: {
    setActive(state, active) {
      return {
        active,
      };
    },
  },
};

const paymentMethod = {
  name: 'paymentMethod',
  state: INITIAL_STATE, // initial state
  reducers: {
    setMethod(state, method) {
      return {
        method,
      };
    },
  },
};

store.addModel(paymentStep);
store.addModel(paymentMethod);
