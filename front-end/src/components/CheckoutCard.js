import React from 'react';
import PropTypes from 'prop-types';

function CheckoutCard({ id, name, quantity, price, index }) {
  return (
    <div className="card-container">
      <p data-testid={ `customer_checkout__element-order-table-item-number-${index}` }>
        { id }
      </p>
      <p data-testid={ `customer_checkout__element-order-table-name-${index}` }>
        { name }
      </p>
      <p
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        { quantity }
      </p>
      <p data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }>
        { price }
      </p>
      <span data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }>
        { quantity * price }
      </span>
      <button
        type="button"
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
      >
        Remover
      </button>
    </div>
  );
}
export default CheckoutCard;
CheckoutCard.propTypes = {
  id: PropTypes.string,
  data: PropTypes.string,
  status: PropTypes.string,
  price: PropTypes.number,
  addrress: PropTypes.string,
}.isRequired;
