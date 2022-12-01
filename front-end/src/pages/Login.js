import React, { useEffect, useContext, useState } from 'react';
import EmailInput from '../components/EmailInput';
import GenericInput from '../components/GenericInput';
import RegisterBtn from '../components/RegisterBtn';
import SubmitBtn from '../components/SubmitBtn';
import LoginContext from '../context/LoginContext';
import '../style/Login.css';

function Login() {
  const { email, setEmail, password, setPassword } = useContext(LoginContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const obj = { email, password };
  const PASSWORDLENGTH = 6;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

  useEffect(() => {
    if (password !== undefined && password.length >= PASSWORDLENGTH && emailRegex) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [password, emailRegex]);

  return (
    <section className="wrapper">
      <section className="user-login-area">
        <img alt="Trybe Delivery App" />
        <form className="form">
          <h1>App Delivery</h1>
          <EmailInput
            testid="common_login__input-email"
            setEmail={ setEmail }
          />
          <GenericInput
            testid="common_login__input-password"
            type="password"
            selector="password"
            fieldName="Password"
            placeholder="********"
            setter={ setPassword }
          />
          <SubmitBtn
            isDisable={ isDisabled }
            testid="common_login__button-login"
            routeSuffix="login"
            sendObject={ obj }
            navigation="/customer/products"
            btnName="Entrar"
          />
          <RegisterBtn
            testid="common_login__button-register"
          />
        </form>
      </section>
    </section>
  );
}

export default Login;
