import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({ id, data, status, price, address }) {
  return (
    <div className="card-container">
      <p data-testid={ `seller_orders__element-order-id-${id}` }>
        { id }
      </p>
      <p data-testid={ `seller_orders__element-delivery-status-${id}` }>
        { status }
      </p>
      <p
        data-testid={ `seller_orders__element-order-date-${id}` }
      >
        { data }
      </p>
      <p data-testid={ `seller_orders__element-card-price-${id}` }>
        { price }
      </p>
      <span data-testid={ `seller_orders__element-card-address-${id}` }>
        { address }
      </span>
    </div>
  );
}
export default OrderCard;
OrderCard.propTypes = {
  id: PropTypes.string,
  data: PropTypes.string,
  status: PropTypes.string,
  price: PropTypes.number,
  addrress: PropTypes.string,
}.isRequired;
