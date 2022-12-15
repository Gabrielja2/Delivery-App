import React from 'react';
import PropTypes from 'prop-types';
import convertDate from '../utils/convertData';

function OrderCardDetails({
  id,
  saleDate,
  status,
  sellerName,
  totalPrice, /* ,
  products */ }) {
  const commomDataTest = 'customer_order_details__element-order-details-label';
  return (
    <div className="card-container">
      <section>
        <p
          data-testid={ `${commomDataTest}-order-id` }
        >
          { id }
        </p>
        <p
          data-testid={ `${commomDataTest}-seller-name` }
        >
          { sellerName }
        </p>
        <p
          data-testid={ `${commomDataTest}-order-date` }
        >
          { convertDate(saleDate) }
        </p>
        <p
          data-testid={ `${commomDataTest}-delivery-status` }
        >
          { status }
        </p>
        <button
          disabled
          data-testid="customer_order_details__button-delivery-check"
          type="submit"
        >
          MARCAR COMO ENTREGUE
        </button>
      </section>
      <section>
        <p
          data-testid="customer_order_details__element-order-total-price"
        >
          { totalPrice.replace('.', ',') }
        </p>

      </section>
    </div>
  );
}

OrderCardDetails.propTypes = {
  id: PropTypes.string,
  data: PropTypes.string,
  status: PropTypes.string,
  price: PropTypes.number,
  addrress: PropTypes.string,
}.isRequired;

export default OrderCardDetails;
