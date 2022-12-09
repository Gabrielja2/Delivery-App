import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Card({ url, alt, id, name, price, total, product }) {
  console.log(product);
  const [quantity, setQuantity] = useState(product.quantity || 0);

  const calculateTotal = (cart) => {
    if (cart.length) {
      const soma = cart.reduce((sum, item) => sum + (item.quantity * item.price), 0);
      return soma;
    }
    return 0;
  };

  const handleClick = (value) => {
    if (value === '+') {
      setQuantity(quantity + 1);
    }
    if (value === '-' && quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const createCart = () => {
      if (localStorage.getItem('cart')) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (cart.some((p) => p.name === name)) {
          cart = cart.reduce((acc, curr) => {
            if (curr.name === name) {
              curr.quantity = quantity;
              return acc;
            }
            return acc;
          }, cart);
        } else {
          cart = [
            ...cart,
            { name, price, quantity, id },
          ];
        }
        const updatedCart = cart.filter((prod) => prod.quantity);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        total(calculateTotal(updatedCart));
      } else {
        localStorage.setItem(
          'cart',
          JSON.stringify([{ name, price, quantity }]),
        );
        total(calculateTotal([{ name, price, quantity }]));
      }
    };
    createCart();
  }, [quantity]);

  return (
    <div className="card-container">
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        { price.replace('.', ',') }
      </p>

      <figure>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          width="60%"
          height="200px"
          src={ url }
          alt={ alt }
        />
      </figure>

      <p
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </p>

      <button
        className="submit-btn"
        onClick={ (e) => handleClick(e.target.value) }
        type="button"
        value="+"
        data-testid={ `customer_products__button-card-add-item-${id}` }
      >
        +
      </button>
      <input
        type="number"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        value={ quantity }
        onChange={ (e) => handleChange(e.target.value) }
      />
      <button
        className="submit-btn"
        onClick={ (e) => handleClick(e.target.value) }
        type="button"
        value="-"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        -
      </button>
    </div>
  );
}

export default Card;

Card.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  url: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.number,
}.isRequired;
