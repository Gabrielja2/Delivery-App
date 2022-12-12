import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import CheckoutCard from '../components/CheckoutCard';

import '../style/Products.css';

function Checkout() {
  const [cart, setCart] = useState([]);
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

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
            { valorTotal() }
          </span>
        </button>
      </section>
      <section className="products-container">
        <div className="card-container">
          <p data-testid="customer_checkout__select-seller">
            ola n deu certo
          </p>
          <p data-testid="customer_checkout__input-address">
            infelizmente
          </p>
          <p
            data-testid="customer_checkout__input-address-number"
          >
            ;xx
          </p>

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
