import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../components/Card';
import NavBar from '../components/NavBar';
import { requestData } from '../services/requests';
import UserContext from '../context/UserContext';
import '../style/Products.css';
import getQuantity from '../utils/getQuantity';

function Products() {
  const { products, setProducts } = useContext(UserContext);
  const [cartTotal, setCartTotal] = useState(0);
  const navigate = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    requestData('/products', token)
      .then((response) => setProducts(response));
  }, []);

  const handleCheckout = () => {
    navigate.push('/customer/checkout');
  };

  return (
    <section>
      <NavBar user={ JSON.parse(localStorage.getItem('user')).name } />
      <section className="products-container">
        { products.length && (

          products.map((p, index) => (
            <Card
              id={ p.id }
              key={ index }
              name={ p.name }
              price={ p.price }
              url={ p.urlImage }
              total={ (t) => setCartTotal(t) }
              product={
                (getQuantity().find((prod) => prod.name === p.name)) || 0
              }

            />
          ))
        )}
      </section>
      <button
        testid="customer_products__checkout-bottom-value"
        onClick={ handleCheckout }
        disabled={ cartTotal === 0 }
        type="button"
      >
        <span data-testid="customer_products__checkout-bottom-value">

          { cartTotal.toFixed(2).toString().replace('.', ',') }
        </span>

      </button>
    </section>
  );
}

export default Products;
