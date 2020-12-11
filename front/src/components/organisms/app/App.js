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
import SecureRoutes from '../../molecules/secureRoutes/SecureRoutes';
import BookDetail from '../../molecules/bookDetail/BookDetail';
import FinishPage from '../../molecules/finishPage/FinishPage';
import NoMatch from '../../molecules/noMatch/NoMatch';

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
            <Route exact path='/books' component={MainPage}/>
            <Route path='/books/:id' component={BookDetail}/>
            <Route path='/cart' component={CartComponent}/>
            <Route path='/finishPage' component={FinishPage}/>
            <Route path='*' component={NoMatch}/>
            <SecureRoutes/>
          </Switch>
        </MainTheme>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
