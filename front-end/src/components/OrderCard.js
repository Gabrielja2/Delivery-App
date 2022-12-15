import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import convertDate from '../utils/convertData';

function OrderCard({ id, data, status, price, address }) {
  const { role } = JSON.parse(localStorage.getItem('user'));

  return (
    <Link className="card-container" to={ `/customer/orders/${id}` }>
      <p data-testid={ `${role}_orders__element-order-id-${id}` }>
        { id }
      </p>
      <p data-testid={ `${role}_orders__element-delivery-status-${id}` }>
        { status }
      </p>
      <p
        data-testid={ `${role}_orders__element-order-date-${id}` }
      >
        { convertDate(data) }
      </p>
      <p data-testid={ `${role}_orders__element-card-price-${id}` }>
        { price.replace('.', ',') }
      </p>
      {
        role === 'seller' ? (
          <span data-testid={ `${role}_orders__element-card-address-${id}` }>
            { address }
          </span>
        ) : null
      }
    </Link>
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
