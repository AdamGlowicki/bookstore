import React from 'react';
import {Provider} from 'react-redux';
import store from "../store";
import App from './organisms/app/App';
import MyCircularProgress from "./molecules/alerts/CircularProgress";
import Alert from "./molecules/alerts/Alert";


const Root = () => {
  return (
    <Provider store={store}>
      <App/>
      <Alert/>
      <MyCircularProgress/>
    </Provider>
  )
};

export default Root
