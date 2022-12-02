import React from 'react';
import PropTypes from 'prop-types';

function Button({
  btnName,
  testid,
  type,
  isDisable,
  onClick }) {
  return (
    <button
      disabled={ isDisable }
      data-testid={ testid }
      type={ type === 'submit' ? 'submit' : 'button' }
      className="submit-btn"
      onClick={ onClick }
    >
      { btnName }
    </button>
  );
}

export default Button;

Button.propTypes = {
  routeSuffix: PropTypes.string,
  sendObject: PropTypes.shape({}),
  navigation: PropTypes.string,
  btnName: PropTypes.string,
}.isRequired;
