import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import CheckoutCard from '../components/CheckoutCard';

import '../style/Products.css';
import { requestSellers } from '../services/requests';

function Checkout() {
  const [cart, setCart] = useState([]);
  const [seller, setSeller] = useState([]);
  const [address, setAddress] = useState('');

  const getCarrinho = () => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    return carrinho;
  };

  const handleChange = (value) => {
    setAddress(value);
  };

  const handleDelete = (id) => {
    const newCart = getCarrinho()?.filter((item, index) => index !== id);

    localStorage.setItem('carrinho', JSON.stringify(newCart));
    setCart(JSON.parse(localStorage.getItem('carrinho')));
  };

  useEffect(() => {
    requestSellers('/seller').then((response) => setSeller(response));
  }, [setSeller]);

  const setCarrinho = () => {
    setCart(getCarrinho());
  };

  const valorTotal = () => {
    const total = cart.reduce((acc, curr) => {
      acc += (curr.price * curr.quantity);

      return acc;
    }, 0);
    return total;
  };

  useEffect(() => {
    setCarrinho();
  }, []);

  return (
    <section>
      <NavBar />
      <section className="products-container">
        {
          getCarrinho().map(({ name, quantity, price, totalPrice }, index) => (
            <CheckoutCard
              id={ index + 1 }
              key={ index }
              name={ name }
              quantity={ quantity }
              price={ price }
              totalPrice={ totalPrice }
              index={ index }
              handleDelete={ (id) => handleDelete(id) }

            />
          ))
        }
        <button
          className="submit-btn"
          disabled={ false }
          type="button"
        >
          <span data-testid="customer_checkout__element-order-total-price">
            { valorTotal().toFixed(2).toString().replace('.', ',') }
          </span>
        </button>
      </section>
      <section className="products-container">
        <div className="card-container">
          <select
            data-testid="customer_checkout__select-seller"
            name="seller"
          >
            {
              seller.map(({ name }, index) => (
                <option key={ index }>{name}</option>
              ))
            }
          </select>

          <input
            type="text"
            data-testid="customer_checkout__input-address"
            onChange={ (e) => handleChange(e.target.value) }
            value={ address }

          />
          <input
            type="text"
            data-testid="customer_checkout__input-address-number"
            onChange={ (e) => handleChange(e.target.value) }

          />

          <button
            type="submit"
            data-testid="customer_checkout__button-submit-order"
          >
            Finalizar Pedido
          </button>
        </div>
      </section>
    </section>
  );
}

export default Checkout;
