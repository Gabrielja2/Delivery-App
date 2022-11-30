import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { requestLogin } from '../services/requests';

function SubmitBtn({ routeSuffix, sendObject, navigation, btnName, setter = undefined }) {
  const [errorRequisiton, setErrorRequisition] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const navigate = NavLink();

  function handleSubmit() {
    requestLogin(routeSuffix, sendObject)
      .then((data) => {
        if (navigation === '/post') {
          localStorage.setItem('token', data.token);
          if (setter) setter(false);
        }
        navigate(navigation);
      })
      .catch(({ response }) => {
        setErrorMessage(response.data.message);
        setErrorRequisition(true);
      });
  }

  function renderMessage() {
    return (
      <span>{errorMessage}</span>
    );
  }

  return (
    <>
      <button type="button" onClick={ () => handleSubmit() }>
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
