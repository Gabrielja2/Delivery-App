import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { requestLogin } from '../services/requests';

function SubmitBtn({
  routeSuffix,
  sendObject,
  navigation,
  btnName,
  setter = undefined,
  testid,
  isDisable }) {
  const [errorRequisiton, setErrorRequisition] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const navigate = useHistory();

  function handleSubmit() {
    requestLogin(routeSuffix, sendObject)
      .then((data) => {
        if (navigation === '/login') {
          localStorage.setItem('token', data.token);
          if (setter) setter(false);
        }
        navigate.push(navigation);
      })
      .catch(({ response }) => {
        setErrorMessage(response.data.message);
        setErrorRequisition(true);
      });
  }

  function renderMessage() {
    return (
      <span data-testid="common_login__element-invalid-email">{errorMessage}</span>
    );
  }

  return (
    <>
      <button
        disabled={ isDisable }
        data-testid={ testid }
        type="button"
        className="submit-btn"
        onClick={ () => handleSubmit() }
      >
        { btnName }
      </button>
      { errorRequisiton && renderMessage() }
    </>
  );
}

export default SubmitBtn;

SubmitBtn.propTypes = {
  routeSuffix: PropTypes.string,
  sendObject: PropTypes.shape({}),
  navigation: PropTypes.string,
  btnName: PropTypes.string,
}.isRequired;
