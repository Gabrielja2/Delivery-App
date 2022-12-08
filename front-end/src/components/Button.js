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
  type: PropTypes.string,
  isDisable: PropTypes.boolean,
  onClick: PropTypes.shape({}),
  testid: PropTypes.string,
  btnName: PropTypes.string,
}.isRequired;
