import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function NavBar({ user }) {
  const navigation = useHistory();
  return (
    <nav>
      <a href={ () => navigation.push('/customer/products') }>PRODUTOS</a>
      <a href={ () => navigation.push('/customer/orders') }>MEUS PEDIDOS</a>
      <a href={ () => navigation.push('/customer') }>{ user }</a>
    </nav>
  );
}

export default NavBar;

NavBar.propTypes = {
  href: PropTypes.func,
  user: PropTypes.string,
}.isRequired;
