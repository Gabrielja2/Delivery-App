import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import NavBar from '../components/NavBar';
import { requestProducts } from '../services/requests';
// import UserContext from '../context/UserContext';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const response = requestProducts();

      setProducts(response);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <section>
      <NavBar />
      <section>
        {
          products.map((p) => (
            <Card
              id={ p.id }
              key={ p.id }
              name={ p.name }
              price={ p.price }
              url={ p.url_image }
            />))
        }
      </section>
    </section>
  );
}

export default Products;
