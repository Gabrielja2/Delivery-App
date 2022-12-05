import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function NavBar({ user }) {
  const navigation = useHistory();

  const handleOnLogout = () => {
    localStorage.removeItem('token');
    navigation.push('/');
  };

  return (
    <nav>
      <a href={ navigation.push('/customer/products') }>PRODUTOS</a>
      <a href={ navigation.push('/customer/orders') }>MEUS PEDIDOS</a>
      <a href={ navigation.push('/customer') }>
        Logged as
        {user}
      </a>
      <a href={ handleOnLogout }>Sair</a>
    </nav>
  );
}

export default NavBar;

NavBar.propTypes = {
  href: PropTypes.func,
  user: PropTypes.string,
}.isRequired;
