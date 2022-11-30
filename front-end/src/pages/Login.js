import React, { useEffect, useContext, useState } from 'react';
import EmailInput from '../components/EmailInput';
import GenericInput from '../components/GenericInput';
import RegisterBtn from '../components/RegisterBtn';
import SubmitBtn from '../components/SubmitBtn';
import LoginContext from '../context/LoginContext';

function Login() {
  const { email, setEmail, password, setPassword } = useContext(LoginContext);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const obj = { email, password };

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
          navigation="/login"
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
