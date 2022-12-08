import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import GenericInput from './GenericInput';
import UserContext from '../context/UserContext';

function Card({ url, alt, id, name, price }) {
  const [inputValue, setInputValue] = useState(0);
  const { cart, setCart } = useContext(UserContext);
  const [product, setProduct] = useState({
    productPrice: 0,
    productName: '',
    quantity: 0,
  });

  const handleOnClickAdd = (event) => {
    event.preventDefault();
    setInputValue((prev) => prev + 1);

    const productPrice = event.target.parentNode.firstChild.innerText;
    const productName = event.target.parentNode.children[2].innerText;
    setProduct({ productName, productPrice, quantity: inputValue });
  };

  const handleOnClickRemove = (event) => {
    event.preventDefault();
    const productPrice = event.target.parentNode.firstChild.innerText;
    const productName = event.target.parentNode.children[2].innerText;

    setInputValue((prev) => prev - 1);
    if (inputValue <= 0) {
      setInputValue(0);
      setProduct([]);
    }

    setProduct({ productName, productPrice, quantity: inputValue });
  };

  useEffect(() => {
    setProduct({ ...product, quantity: inputValue });
  }, [inputValue]);

  return (
    <div className="card-container">
      <p data-testid={ `customer_products__element-card-price-${String(id)}` }>
        { price.replace('.', ',') }
      </p>

      <figure>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ url }
          alt={ alt }
        />
      </figure>

      <p
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </p>

      <Button
        onClick={ handleOnClickAdd }
        type="button"
        testid={ `customer_products__button-card-add-item-${id}` }
      >
        +
      </Button>
      <GenericInput
        testid={ `customer_products__input-card-quantity-${id}` }
        value={ inputValue }
        setter={ setInputValue }
      />
      <Button
        onClick={ handleOnClickRemove }
        type="button"
        testid={ `customer_products__button-card-rm-item-${id}` }
      >
        -
      </Button>
    </div>
  );
}

export default Card;

Card.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  url: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.number,
}.isRequired;
