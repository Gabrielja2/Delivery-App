import React, { useContext } from 'react';
import EmailInput from '../components/EmailInput';
import GenericInput from '../components/GenericInput';
import RegisterBtn from '../components/RegisterBtn';
import SubmitBtn from '../components/SubmitBtn';
import UserContext from '../context/UserContext';
import '../style/Login.css';
import loginValidations from '../utils/validations';

function Login() {
  const { email, setEmail, password, setPassword } = useContext(UserContext);
  const obj = { email, password };

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
            isDisable={ loginValidations(email, password) }
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
