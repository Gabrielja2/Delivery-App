import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import GenericInput from './GenericInput';

function Card({ url, alt, id, name, price, inputValue }) {
  console.log(id);
  return (
    <div>
      <p data-testid={ `customer_products__element-card-price-${String(id)}` }>
        R$
        {' '}
        { price }
      </p>

      <figure>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ url }
          alt={ alt }
        />
      </figure>

      <p
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </p>

      <Button
        type="button"
        testid={ `customer_products__button-card-add-item-${id}` }
      >
        +
      </Button>
      <GenericInput
        testid={ `customer_products__input-card-quantity-${id}` }
        value={ inputValue }
      />
      <Button
        type="button"
        testid={ `customer_products__button-card-rm-item-${id}` }
      >
        -
      </Button>
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
