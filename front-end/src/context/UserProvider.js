import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './LoginContext';

function LoginProvider({ children }) {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const contextUser = useMemo(() => ({
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
  }), [email, password, name]);

  return (
    <UserContext.Provider value={ contextUser }>
      { children }
    </UserContext.Provider>
  );
}

export default LoginProvider;

LoginProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
