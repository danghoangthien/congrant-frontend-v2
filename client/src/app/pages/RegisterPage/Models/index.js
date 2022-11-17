import store from 'appRedux/store';
const INITIAL_STATE = {
  active: '1',
};

const bulkStep = {
  name: 'registerStep',
  state: INITIAL_STATE, // initial state
  reducers: {
    setActive(state, active) {
      return {
        active,
      };
    },
  },
};

store.addModel(bulkStep);
