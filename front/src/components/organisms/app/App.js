import React, {Fragment, useEffect} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import MainTheme from '../../mainTheme/MainTheme';
import Nav from '../../molecules/nav/Nav';
import {useDispatch, useSelector} from 'react-redux';
import {fetchBooks} from '../../../reducers/bookReducer/duck/operations';
import MainPage from '../../molecules/mainPage/MainPage';
import CartComponent from '../../molecules/cartComponent/CartComponent';
import {getSessionStorage} from '../../../assets/utils';
import {addFromSession} from '../../../reducers/cartReducer/duck/actions';
import Credentials from '../../molecules/credentials/Credentials';

const App = () => {
  const dispatch = useDispatch();
  let itemsId = useSelector(state => state.cart.cart);

  useEffect(() => {
    if (!itemsId.length) {
      dispatch(addFromSession(getSessionStorage()))
    }
    dispatch(fetchBooks())
  }, [])

  return (
    <Fragment>
      <BrowserRouter>
        <MainTheme>
          <Nav/>
          <Switch>
            <Route exact path='/' component={() => <Redirect to='/books'/>}/>
            <Route path='/books' component={MainPage}/>
            <Route path='/cart' component={CartComponent}/>
            <Route path='/credentials' component={Credentials}/>
          </Switch>
        </MainTheme>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
