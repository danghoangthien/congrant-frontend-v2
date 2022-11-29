import store from 'appRedux/store';
const INITIAL_STATE = {
  active: '1',
  completed: [],
};

const bulkStep = {
  name: 'registerStep',
  state: INITIAL_STATE, // initial state
  reducers: {
    setActive(state, active) {
      const completedItem = state.completed.filter(item => item !== active);
      return {
        completed: [...new Set([...completedItem])],
        active,
      };
    },
    setCompleted(state, completedItem) {
      return {
        ...state,
        completed: [...new Set([...state.completed, completedItem])],
      };
    },
    unCompleted(state, removeItem) {
      const completedItem = state.completed.filter(item => item !== removeItem);
      return {
        ...state,
        completed: [...completedItem],
      };
    },
  },
};

store.addModel(bulkStep);
