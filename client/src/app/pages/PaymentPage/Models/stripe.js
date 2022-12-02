import store from 'appRedux/store';
import { dataSource } from './../StripePaymentTable';
const INITIAL_STATE = {
  item: null,
  navigation: {
    currentItem: 1,
    totalItems: dataSource.length,
  },
};

const stripeDetail = {
  name: 'stripeDetail',
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
    async current(queries, state) {
      console.log('queries', queries);
      // const { data } = await server.get('/api/funding', {
      //   params: queries,
      // });
      const { navigation } = state;
      const { item } = queries;

      const currentItem = parseInt(item) || 1;
      const startSlice = (currentItem - 1) * 1;
      const endslice = startSlice + 1;
      const sliced = dataSource.slice(startSlice, endslice);
      const nextItem =
        currentItem + 1 < pagination.totalItems ? currentItem + 1 : navigation.totalItems;
      const prevItem = currentItem - 1 > 1 ? currentItem - 1 : 1;
      this.setData({
        item: sliced,
        navigation: {
          ...navigation,
          currentItem,
          nextItem,
          prevItem,
        },
      });
    },
  },
};

store.addModel(stripeDetail);
