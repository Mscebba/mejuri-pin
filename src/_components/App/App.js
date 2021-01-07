import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Footer from 'layout/Footer/Footer';
import Header from 'layout/Header/Header';
import Category from '_components/Category/Category/';
import Favorites from '_components/Favorites/Favorites';

import 'styles/main.scss';
import { Main } from './App.styled';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path='/' component={Category} />
          <Route exact path='/category/:id' component={Category} />
          <Route exact path='/favorites' component={Favorites} />
        </Switch>
      </Main>
      <Footer />
    </>
  );
}

export default App;
