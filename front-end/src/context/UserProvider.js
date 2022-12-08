import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [products, setProducts] = useState([]);

  const contextUser = useMemo(() => ({
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    products,
    setProducts,
  }), [email, password, name, products]);

  return (
    <UserContext.Provider value={ contextUser }>
      { children }
    </UserContext.Provider>
  );
}

export default UserProvider;

UserProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
