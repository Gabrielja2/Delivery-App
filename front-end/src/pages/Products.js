import React, { useContext, useEffect } from 'react';
import Card from '../components/Card';
import NavBar from '../components/NavBar';
import { requestData } from '../services/requests';
import UserContext from '../context/UserContext';
import '../style/Products.css';
import Button from '../components/Button';

function Products() {
  const { products, setProducts, cart, setTotal, total } = useContext(UserContext);

  useEffect(() => {
    async function fetch() {
      const token = localStorage.getItem('token');
      const response = await requestData('/products', token);

      setProducts(response);
    }

    fetch();
  }, [setProducts]);

  const sum = () => cart.reduce((acc, p) => {
    const price = Number(p.productPrice.replace(',', '.'));

    const mult = p.quantity * price;

    acc = Number(acc) + Number(mult);

    return acc;
  }, 0);

  useEffect(() => {
    setTotal(sum());
  }, [cart, setTotal]);

  return (
    <section>
      <NavBar user={ JSON.parse(localStorage.getItem('user')).name } />
      <section className="products-container">
        {
          products.map((p) => (
            <Card
              id={ p.id }
              key={ p.id }
              name={ p.name }
              price={ p.price }
              url={ p.urlImage }
            />
          ))
        }
      </section>
      <Button className="submit-btn">
        {
          total
        }
      </Button>
    </section>
  );
}

export default Products;
