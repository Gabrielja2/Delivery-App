import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const contextUser = useMemo(() => ({
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    products,
    setProducts,
    cart,
    setCart,
  }), [email, password, name, products, cart]);

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
