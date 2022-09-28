import { routerMiddleware, connectRouter } from 'connected-react-router';
import { init } from '@rematch/core';
import loadingPlugin from '@rematch/loading';

const createBrowserHistory = require('history').createBrowserHistory;

export const history = createBrowserHistory();

const store = init({
  models: {},
  plugins: [loadingPlugin()],
  redux: {
    reducers: {
      router: connectRouter(history),
    },
    middlewares: [routerMiddleware(history)],
  },
});

export default store;
