import store from 'appRedux/store';
const INITIAL_STATE = {
  active: '1',
};

const bulkStep = {
  name: 'receiptBulkStep',
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
