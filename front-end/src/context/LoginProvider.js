import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const contextLogin = useMemo(() => ({
    email,
    setEmail,
    password,
    setPassword,
  }), [email, password]);

  return (
    <LoginContext.Provider value={ contextLogin }>
      { children }
    </LoginContext.Provider>
  );
}

export default LoginProvider;

LoginProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
