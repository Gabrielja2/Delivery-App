import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({ id, data, status, price, address }) {
  const { role } = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="card-container">
      <p data-testid={ `${role}_orders__element-order-id-${id}` }>
        { id }
      </p>
      <p data-testid={ `${role}_orders__element-delivery-status-${id}` }>
        { status }
      </p>
      <p
        data-testid={ `${role}_orders__element-order-date-${id}` }
      >
        { `${data[8]}${data[9]}/${data[5]}${data[6]}/${data[2]}${data[3]}` }
      </p>
      <p data-testid={ `${role}_orders__element-card-price-${id}` }>
        { price }
      </p>
      {
        role === 'seller' ? (
          <span data-testid={ `${role}_orders__element-card-address-${id}` }>
            { address }
          </span>
        ) : null
      }
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
