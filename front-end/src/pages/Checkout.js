import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import CheckoutCard from '../components/CheckoutCard';

import '../style/Products.css';
import { requestSellers } from '../services/requests';

function Checkout() {
  const [cart, setCart] = useState([]);
  const [seller, setSeller] = useState([]);
  const [address, setAddress] = useState('');
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  const handleChange = (value) => {
    console.log(address);
    setAddress(value);
  };

  useEffect(() => {
    requestSellers('/seller').then((response) => setSeller(response));
  }, [setSeller]);

  const setCarrinho = () => {
    setCart(carrinho);
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
          carrinho.map(({ name, quantity, price, totalPrice }, index) => (
            <CheckoutCard
              id={ index + 1 }
              key={ index }
              name={ name }
              quantity={ quantity }
              price={ price }
              totalPrice={ totalPrice }
              index={ index }

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
                <option value="" key={ index }>{name}</option>
              ))
            }
          </select>

          <input
            type="text"
            data-testid="customer_checkout__input-address"
            onChange={ (e) => handleChange(e.target.value) }

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
