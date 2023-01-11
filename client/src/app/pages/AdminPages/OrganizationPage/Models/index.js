import store from 'appRedux/store';
import { dataSource, pagination, COLUMN_SETTING_LOCALSTORAGE, columnMap } from '../mockData';
import { getWithExpiry } from 'utils/localStorageHandler';
const INITIAL_STATE = {
  items: [],
  pagination: {},
  download_items: [],
  column_setting: getWithExpiry(COLUMN_SETTING_LOCALSTORAGE) || Object.keys(columnMap),
};

const organizationList = {
  name: 'organizationList',
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
      console.log('queries', queries);
      // const { data } = await server.get('/api/funding', {
      //   params: queries,
      // });

      const { page } = queries;

      const currentPage = page || 1;
      const startSlice = (currentPage - 1) * pagination.limit;
      const endslice = startSlice + pagination.limit;
      const sliced = dataSource.slice(startSlice, endslice);
      this.setData({
        //items: [dataSource[currentPage - 1]],
        items: pagination.limit ? sliced : dataSource,
        pagination: {
          ...pagination,
          current_page: parseInt(currentPage),
        },
      });
    },
    async download(queries) {
      console.log('queries', queries);
      // Exclude page param out of query string:
      // const { page, ...queries_without_paging } = queries
      // const { data } = await server.get('/api/funding', {
      //   params: queries_without_paging,
      // });

      this.setData({
        download_items: [...dataSource],
      });
    },
  },
};

store.addModel(organizationList);
