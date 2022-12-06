import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

function NavBar({ user }) {
  const navigation = useHistory();

  const handleOnLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    navigation.push('/');
  };

  return (
    <nav>
      <Link
        data-testid="customer_products__element-navbar-link-products"
        to="/customer/products"
      >
        Produtos
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/customer/orders"
      >
        Meus Pedidos

      </Link>
      <span
        data-testid="customer_products__element-navbar-user-full-name"
      >
        Logado como
        { user || localStorage.getItem('name') }
      </span>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ handleOnLogout }
      >
        Sair
      </button>
    </nav>
  );
}

export default NavBar;

NavBar.propTypes = {
  href: PropTypes.func,
  user: PropTypes.string,
}.isRequired;
