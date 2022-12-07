import React, { useContext, useState } from 'react';
import EmailInput from '../components/EmailInput';
import GenericInput from '../components/GenericInput';
import AdmNavbar from '../components/AdmNavbar';
import Button from '../components/Button';
import UserContext from '../context/UserContext';
import { admRegisterValidations } from '../utils/validations';
import '../style/Login.css';
import { requestRegister } from '../services/requests';

function Manage() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    role,
    /* setRole */ } = useContext(UserContext);
  const [errorRequisiton, setErrorRequisition] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await requestRegister({ name, email, password, role });

      localStorage.setItem('user', JSON.stringify(newUser));
    } catch ({ response }) {
      setErrorMessage(response.data.message);
      setErrorRequisition(true);
    }
  };

  return (
    <section className="wrapper">
      <AdmNavbar user={ JSON.parse(localStorage.getItem('user')).name } />
      <section className="user-login-area">
        <img alt="Trybe Delivery App" />
        <form className="form">
          <h1>Cadastrar novo usuário</h1>
          <GenericInput
            testid="admin_manage__input-name"
            type="text"
            selector="name"
            fieldName="Name"
            placeholder="Nome e sobrenome"
            setter={ setName }
          />
          <EmailInput
            testid="admin_manage__input-email"
            setEmail={ setEmail }
          />
          <GenericInput
            testid="admin_manage__input-password"
            type="password"
            selector="password"
            fieldName="Password"
            placeholder="******"
            setter={ setPassword }
          />

          Tipo
          <select
            data-testid="admin_manage__select-role"
            name="Tipo"
          >
            <option value=""> </option>
            <option value="seller">Seller</option>
          </select>

          {errorRequisiton && (
            <span
              data-testid="admin_manage__element-invalid-register"
            >
              {errorMessage}
            </span>
          )}
          <Button
            testid="admin_manage__button-register"
            btnName="Cadastrar"
            type="submit"
            onClick={ handleOnSubmit }
            isDisable={ admRegisterValidations(name, email, password, role) }
          />
        </form>
      </section>
    </section>
  );
}

export default Manage;
