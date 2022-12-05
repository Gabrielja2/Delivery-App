import React from 'react';
import PropTypes from 'prop-types';

function Card({ url, alt, id }) {
  return (
    <figure data-testid={ `customer_products__element-card-price-${String(id)}` }>
      <img src={ url } alt={ alt } />
    </figure>
  );
}

export default Card;

Card.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.number,
}.isRequired;
