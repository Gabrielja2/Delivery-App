import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import GenericInput from './GenericInput';
import UserContext from '../context/UserContext';

function Card({ url, alt, id, name, price }) {
  const [inputValue, setInputValue] = useState(0);
  const { cart, setCart } = useContext(UserContext);

  const handleOnClickAdd = () => {
    setInputValue((prev) => prev + 1);
  };

  const handleOnClickRemove = (event) => {
    setInputValue((prev) => prev - 1);
    if (inputValue <= 0) {
      setInputValue(0);
    }
    // console.log(event.target.parentNode.firstChild.innerText);
    console.log(event.target.parentNode.children[2].innerText);
  };

  return (
    <div>
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
