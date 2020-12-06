import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from "../store";
import MainTheme from './organisms/mainTheme/MainTheme';
import MainPage from './molecules/mainPage/MainPage';
import Nav from './molecules/nav/Nav';

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTheme>
          <Nav/>
          <Switch>
            <Route exact path='/' component={() => <Redirect to='/books'/>}/>
            <Route path='/books' component={MainPage}/>
            <Route path='/cart' component={MainPage}/>
          </Switch>
        </MainTheme>
      </BrowserRouter>
    </Provider>
  )
};

export default Root
