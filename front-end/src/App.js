import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import UserProvider from './context/UserProvider';
import Products from './pages/Products';

function App() {
  return (
    <Switch>
      <UserProvider>
        <Route exact path="/" render={ () => <Redirect to="/login" /> } />
        <Route path="/customer/products" component={ Products } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
      </UserProvider>

    </Switch>

  );
}

export default App;
