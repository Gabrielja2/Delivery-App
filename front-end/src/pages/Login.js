import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import GenericInput from '../components/GenericInput';
import RegisterBtn from '../components/RegisterBtn';
import Button from '../components/Button';
import UserContext from '../context/UserContext';
import '../style/Login.css';
import { loginValidations } from '../utils/validations';
import { requestLogin } from '../services/requests';

function Login() {
  const { email, setEmail, password, setPassword } = useContext(UserContext);
  const [errorRequisiton, setErrorRequisition] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useHistory();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      if (JSON.parse(user).role === 'admin') {
        navigate.push('/admin/manage');
      }

      if (JSON.parse(user).role === 'customer') {
        navigate.push('/customer/products');
      }
      if (JSON.parse(user).role === 'seller') {
        navigate.push('/seller/products');
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await requestLogin('/login', { email, password });
      localStorage.setItem('user', JSON.stringify(data));

      if (data.role === 'administrator') {
        navigate.push('/admin/manage');
      } else {
        navigate.push('/customer/products');
      }
    } catch ({ response }) {
      setErrorMessage(response.data.message);
      setErrorRequisition(true);
    }
  };

  return (
    <section className="wrapper">
      <section className="user-login-area">
        <img alt="Trybe Delivery App" />
        <form className="form">
          <h1>App Delivery</h1>
          <GenericInput
            testid="common_login__input-email"
            type="email"
            selector="email"
            fieldName="Email"
            placeholder="dgite seu email"
            setter={ setEmail }
          />
          <GenericInput
            testid="common_login__input-password"
            type="password"
            selector="password"
            fieldName="Password"
            placeholder="********"
            setter={ setPassword }
          />
          <Button
            testid="common_login__button-login"
            type="submit"
            btnName="Entrar"
            onClick={ handleSubmit }
            isDisable={ loginValidations(email, password) }
          />
          {errorRequisiton && (
            <span data-testid="common_login__element-invalid-email">{errorMessage}</span>
          )}
          <RegisterBtn
            testid="common_login__button-register"
          />
        </form>
      </section>
    </section>
  );
}

export default Login;
