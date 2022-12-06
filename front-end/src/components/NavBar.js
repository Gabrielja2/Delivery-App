import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

function NavBar({ user }) {
  const navigation = useHistory();

  const handleOnLogout = () => {
    localStorage.removeItem('token');
    navigation.push('/');
  };

  return (
    <nav>
      <Link to="/customer/products">Produtos</Link>
      <Link to="/customer/orders">Meus Pedidos</Link>
      <span>
        Logado como
        { user }
      </span>
      <button type="button" onClick={ handleOnLogout }>Sair</button>
    </nav>
  );
}

export default NavBar;

NavBar.propTypes = {
  href: PropTypes.func,
  user: PropTypes.string,
}.isRequired;
