import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import GenericInput from './GenericInput';
import UserContext from '../context/UserContext';

function Card({ url, alt, id, name, price }) {
  const [inputValue, setInputValue] = useState(0);
  const { cart, setCart } = useContext(UserContext);
  const [product, setProduct] = useState();

  const handleOnClickAdd = (event) => {
    event.preventDefault();
    const value = inputValue + 1;
    setInputValue(value);

    const productPrice = event.target.parentNode.firstChild.innerText;
    const productName = event.target.parentNode.children[2].innerText;

    setProduct({ productName, productPrice, quantity: value });
  };

  const handleOnClickRemove = (event) => {
    event.preventDefault();
    let value = inputValue;

    if (inputValue !== 0) {
      value = inputValue - 1;
    }
    // const value = inputValue - 1;
    const productPrice = event.target.parentNode.firstChild.innerText;
    const productName = event.target.parentNode.children[2].innerText;

    setInputValue(value);

    setProduct({ productName, productPrice, quantity: value });
  };

  useEffect(() => {
    if (product) {
      const findProduct = cart.findIndex((p) => p.productName === product?.productName);
      const magicNumber = -1;

      if (product.quantity === 0) {
        const filterProducts = cart.filter((p) => p.productName !== product?.productName);
        return setCart([...filterProducts]);
      }
      if (findProduct === magicNumber) {
        setCart([...cart, product]);
      } else {
        const filterProducts = cart.filter((p) => p.productName !== product?.productName);
        setCart([...filterProducts, product]);
      }
    }
  }, [product]);

  return (
    <div className="card-container">
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        { price.replace('.', ',') }
      </p>

      <figure>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          width="60%"
          height="200px"
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
        btnName="+"
        type="button"
        testid={ `customer_products__button-card-add-item-${id}` }
      />
      <GenericInput
        testid={ `customer_products__input-card-quantity-${id}` }
        value={ inputValue }
        setter={ setInputValue }
      />
      <Button
        onClick={ handleOnClickRemove }
        btnName="-"
        type="button"
        testid={ `customer_products__button-card-rm-item-${id}` }
      />
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
