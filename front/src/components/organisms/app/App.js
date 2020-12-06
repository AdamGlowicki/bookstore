import React, {Fragment, useEffect} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import MainTheme from '../../mainTheme/MainTheme';
import Nav from '../../molecules/nav/Nav';
import {useDispatch} from 'react-redux';
import {fetchBooks} from '../../../reducers/bookReducer/duck/operations';
import MainPage from '../../molecules/mainPage/MainPage';
import CartComponent from '../../molecules/cartComponent/CartComponent';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
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
          </Switch>
        </MainTheme>
      </BrowserRouter>
    </Fragment>
  );
};

App.propTypes = {

};

export default App;
