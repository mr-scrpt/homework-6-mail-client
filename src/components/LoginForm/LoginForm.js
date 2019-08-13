// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app
import React from 'react';
import {fields} from './fields';
import {withAuth} from '../../context/Auth';
import {Button} from '../Button';

import { Redirect } from 'react-router-dom';

import Style from './LoginForm.module.css';

let LoginForm = ({authError, authorize, isAuthorized}) => {


  const form = fields.map(({id, label, type}) => (
    <p key={id} className="field">
      <label className="field__label" htmlFor={id}>
        <span className="field-label">{label}</span>
      </label>
      <input
        id={id}
        className={`field__input field-input t-input-${id}`}
        type={type}
        name={id}

      />
    </p>
  ));

  const submitHandler = (e) => {
    e.preventDefault();
    authorize(e.target.email.value, e.target.password.value);

  };

  const FormTpl = () => {
      const formClass = `${Style.form} t-form`;
      return(
        <form onSubmit={submitHandler} className={formClass}>
          {form}
          {authError !== '' && (
            <p className="login-form-error t-login-error">{authError}</p>
          )}
          <div className="login-form__buttons">
            <Button className="t-login">
              Войти
            </Button>
          </div>
        </form>
      )
  };
  return ( isAuthorized ? <Redirect to='/app' /> : <FormTpl/> )
};
LoginForm = withAuth(LoginForm);

export default LoginForm;