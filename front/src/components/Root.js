import React from 'react';
import {Provider} from 'react-redux';
import store from "../store";
import App from './organisms/app/App';
import SuccessAlert from './molecules/alerts/SuccessAlert';


const Root = () => {
  return (
    <Provider store={store}>
      <App/>
      <SuccessAlert/>
    </Provider>
  )
};

export default Root
