import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import LoginProvider from './context/LoginProvider';

function App() {
  return (
    <Switch>
      <Route path="/register" component={ Register } />
      <LoginProvider>
        <Redirect to="/login">
          <Route exact path="/" component={ Login } />
        </Redirect>
        <Route path="/login" component={ Login } />
      </LoginProvider>
    </Switch>

  );
}

export default App;
