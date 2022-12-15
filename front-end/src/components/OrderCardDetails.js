import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { requestSellers } from '../services/requests';

function OrderCardDetails({
  id,
  data,
  status, /* , price */
}) {
  const [sellerName, setSellerName] = useState('');
  const dia = `${data[8]}${data[9]}`;
  const mes = `${data[5]}${data[6]}`;
  const ano = `${data[0]}${data[1]}${data[2]}${data[3]}`;

  const getSellerName = async () => {
    const resp = await requestSellers('/seller');
    const { name } = resp.find((r) => r.id === id);
    setSellerName(name);
  };

  useEffect(() => {
    getSellerName();
  }, []);

  return (
    <div className="card-container">
      <p
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        { id }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        { sellerName }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { `${dia}/${mes}/${ano}` }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { status }
      </p>
      <button
        data-testid="customer_order_details__button-delivery-check"
        type="submit"
      >
        MARCAR COMO ENTREGUE
      </button>

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
