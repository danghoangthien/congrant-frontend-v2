/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';
import { ConnectedRouter } from 'connected-react-router';

// Use consistent styling
import 'sanitize.css/sanitize.css';

import { App } from 'app';
import store, { history } from './appRedux/store';

import { HelmetProvider } from 'react-helmet-async';

import reportWebVitals from 'reportWebVitals';
import { ConfigProvider } from 'antd';
import { PRIMARY_COLOR } from 'styles/StyleConstants';

// Initialize languages
import './locales/i18n';

import 'antd/dist/antd.variable.min.css';
import 'antd/dist/antd.less';
import 'antd-css-utilities/utility.min.css';

// Observe loading of Inter (to remove 'Inter', remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Inter', {});

// When Inter is loaded, add a font-family using Inter to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ConfigProvider.config({
  theme: {
    //primaryColor: PRIMARY_COLOR,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HelmetProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HelmetProvider>
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE,
);

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
