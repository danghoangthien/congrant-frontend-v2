import store from 'appRedux/store';
import { dataSource, pagination } from '../mockData';
const INITIAL_STATE = {
  items: [],
  pagination: {},
};

const unclaimedSupporterList = {
  name: 'unclaimedSupporterList',
  state: INITIAL_STATE, // initial state
  reducers: {
    setData(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    async list(queries) {
      // const { data } = await server.get('/api/funding', {
      //   params: queries,
      // });
      console.log('queries', queries);
      const { page } = queries;
      const currentPage = page || 1;
      this.setData({
        items: [dataSource[currentPage - 1]],
        pagination: {
          ...pagination,
          current_page: parseInt(currentPage),
        },
      });
    },
  },
};

store.addModel(unclaimedSupporterList);
