import React, { useContext } from 'react';
import EmailInput from '../components/EmailInput';
import GenericInput from '../components/GenericInput';
import SubmitBtn from '../components/SubmitBtn';
import UserContext from '../context/UserContext';
import '../style/Login.css';

function Register() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName } = useContext(UserContext);

  const obj = { email, password, name };

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
          <SubmitBtn
            testid="common_register__button-register"
            routeSuffix="cadastrar"
            sendObject={ obj }
            navigation="/login"
            btnName="Cadastrar"
          />
        </form>
      </section>
    </section>
  );
}

export default Register;
