import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import LoginProvider from './context/LoginProvider';

function App() {
  return (
    <Switch>
      <LoginProvider>
        <Route path="/login" component={ Login } />
        <Route exact path="/" component={ Login } />
      </LoginProvider>
    </Switch>

  );
}

export default App;
