import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import Alerts from './components/Alerts';
import AppRouter from './components/Router';
import './styles/index.less';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
      <Alerts />
    </Provider>
  );
}

export default App;
