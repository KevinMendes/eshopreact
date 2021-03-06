import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header';
import Sign from './pages/sign/sign';

function App() {
  return (
    <div className="App">
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signIn' component={Sign} />
      </Switch>
    </div>
  );
}

export default App;
