import React, { useContext, useEffect } from 'react';
import OrderCard from '../components/OrderCard';
import UserContext from '../context/UserContext';
import '../style/Products.css';
import SellerNavBar from '../components/SellerNavBar';
import { requestData } from '../services/requests';

function Orders() {
  const { orders, setOrders } = useContext(UserContext);
  useEffect(() => {
    const token = localStorage.getItem('token');
    requestData('/seller/orders', token).then((response) => setOrders(response));
  }, [setOrders]);
  return (
    <section>
      <SellerNavBar user={ JSON.parse(localStorage.getItem('user')).name } />
      <section className="products-container">
        {
          orders.map((p) => (
            <OrderCard
              key={ p.id }
              id={ p.id }
              data={ p.data }
              status={ p.status }
              price={ p.price }
              addrres={ p.addrres }
            />
          ))
        }
      </section>
    </section>
  );
}
export default Orders;
