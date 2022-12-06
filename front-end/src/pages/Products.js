import React, { useContext, useEffect } from 'react';
import Card from '../components/Card';
import NavBar from '../components/NavBar';
import { requestData } from '../services/requests';
import UserContext from '../context/UserContext';

function Products() {
  const { products, setProducts, name } = useContext(UserContext);

  useEffect(() => {
    async function fetch() {
      const token = localStorage.getItem('token');
      const response = await requestData('/products', token);

      setProducts(response);
    }

    fetch();
  }, [setProducts]);

  return (
    <section>
      <NavBar user={ name } />
      <section>
        {
          products.map((p) => (
            <Card
              id={ p.id }
              key={ p.id }
              name={ p.name }
              price={ p.price }
              url={ p.url_image }
            />
          ))
        }
      </section>
    </section>
  );
}

export default Products;
