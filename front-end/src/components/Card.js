import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import GenericInput from './GenericInput';

function Card({ url, alt, id, name, price, inputValue, onChange }) {
  return (
    <div className="card-container">
      <p data-testid={ `customer_products__element-card-price-${String(id)}` }>
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

      <Button
        btnName="+"
        type="button"
        testid={ `customer_products__button-card-add-item-${id}` }
      />
      <GenericInput
        testid={ `customer_products__input-card-quantity-${id}` }
        value={ inputValue }
        setter={ onChange }
      />
      <Button
        btnName="-"
        type="button"
        testid={ `customer_products__button-card-rm-item-${id}` }
      />
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
