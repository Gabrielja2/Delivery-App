import React, { useContext, useState } from 'react';
import EmailInput from '../components/EmailInput';
import GenericInput from '../components/GenericInput';
import Button from '../components/Button';
import UserContext from '../context/UserContext';
import { registerValidations } from '../utils/validations';
import '../style/Login.css';
import { requestRegister } from '../services/requests';

function Register() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName } = useContext(UserContext);
  const [message, setMessage] = useState('');

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await requestRegister({ name, email, password });
    } catch ({ response }) {
      setMessage(response.data.message);
      console.error(response);
    }
  };

  return (
    <section className="wrapper">
      <section className="user-login-area">
        <img alt="Trybe Delivery App" />
        <form className="form">
          <h1>Cadastro</h1>
          <GenericInput
            testid="common_register__input-name"
            type="text"
            selector="name"
            fieldName="Name"
            placeholder="Seu nome"
            setter={ setName }
          />
          <EmailInput
            testid="common_register__input-email"
            setEmail={ setEmail }
          />
          <GenericInput
            testid="common_register__input-password"
            type="password"
            selector="password"
            fieldName="Password"
            placeholder="******"
            setter={ setPassword }
          />
          {
            message && <p>{ message }</p> //  mensagem do erro
          }
          <Button
            testid="common_register__button-register"
            btnName="Cadastrar"
            type="submit"
            onClick={ handleOnSubmit }
            isDisable={ registerValidations(email, password, name) }
          />
        </form>
      </section>
    </section>
  );
}

export default Register;
