import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
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
    </Switch>

  );
}

export default App;
