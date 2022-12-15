import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import OrderCardDetails from '../components/OrderCardDetails';
import SellerNavBar from '../components/SellerNavBar';
import UserContext from '../context/UserContext';
import { requestData } from '../services/requests';
import '../style/Products.css';

function OrderDetail() {
  const { orders, setOrders } = useContext(UserContext);
  const history = useHistory();

  const getOrderId = () => {
    const { pathname } = history.location;
    const path = pathname.split('/');
    return path[path.length - 1];
  };

  const getOrder = async () => {
    const token = localStorage.getItem('token');
    const data = await requestData(`/orders/${getOrderId()}`, token);
    console.log('data', data);
    setOrders(data);
  };

  useEffect(() => {
    getOrder();
  }, [setOrders]);

  return (
    <section>
      <SellerNavBar />
      <section className="products-container">
        {
          orders.length > 0 ? (
            orders.map((o) => (
              <OrderCardDetails
                key={ o.id }
                id={ o.id }
                saleDate={ o.saleDate }
                status={ o.status }
                totalPrice={ o.totalPrice }
                sellerName={ o.seller.name }
                products={ o.product }

              />
            ))
          ) : null
        }
      </section>
    </section>
  );
}
export default OrderDetail;
