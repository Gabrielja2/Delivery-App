import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import LoginProvider from './context/LoginProvider';

function App() {
  return (
    <Switch>
      <LoginProvider>
        <Redirect to="/login">
          <Route exact path="/" component={ Login } />
        </Redirect>
        <Route path="/login" component={ Login } />
      </LoginProvider>
      <Route path="/register" component={ Register } />
    </Switch>

  );
}

export default App;
