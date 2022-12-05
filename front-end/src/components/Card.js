import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import GenericInput from './GenericInput';

function Card({ url, alt, id, name, price, inputValue }) {
  return (
    <div>
      <p>{ price }</p>

      <figure data-testid={ `customer_products__element-card-price-${String(id)}` }>
        <img src={ url } alt={ alt } />
      </figure>

      <p>{ name }</p>

      <Button type="button">+</Button>
      <GenericInput value={ inputValue } />
      <Button type="button q">-</Button>
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
