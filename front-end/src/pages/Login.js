import React, { useState, useEffect } from 'react';
import EmailInput from '../components/EmailInput';
import GenericInput from '../components/GenericInput';
import RegisterBtn from '../components/RegisterBtn';
import SubmitBtn from '../components/SubmitBtn';
// import { Navigate } from 'react-router-dom';

function Login() {
  // const { email, setEmail, password, setPassword } = useContext(LoginContext);

  // const obj = { email, password };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setFailedTryLogin(false);
  }, [email, password]);

  return (
    <section className="user-login-area">
      <img alt="Trybe Delivery App" />
      <form>
        <h1>App Delivery</h1>
        <EmailInput setEmail={ setEmail } />
        <GenericInput
          testid="common_login__input-password"
          type="password"
          selector="password"
          fieldName="Password"
          placeholder="********"
          setter={ setPassword }
        />
        <SubmitBtn
          datat-testid="common_login__button-login"
          routeSuffix="login"
          sendObject={ obj }
          navigation="/post"
          btnName="Entrar"
        />
        <RegisterBtn />
        {
          (failedTryLogin)
            && (
              <p data-testid="login__input_invalid_login_alert">
                {
                  `O endereço de e-mail ou a senha não estão corretos.
                    Por favor, tente novamente.`
                }
              </p>
            )

        }
      </form>
    </section>
  );
}

export default Login;
