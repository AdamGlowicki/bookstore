import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Credentials from '../credentials/Credentials';
import FinishPage from '../finishPage/FinishPage';

const SecureRoutes = () => {
  const cart = useSelector(state => state.cart.cart);

  return (
    <Fragment>
      {cart.length ? (
        <Fragment>
          <Route path='/credentials' component={Credentials}/>
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default SecureRoutes;
