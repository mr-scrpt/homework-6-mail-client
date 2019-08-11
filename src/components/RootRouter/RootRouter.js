import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';


import LoginForm from '../LoginForm';
import AppRouter from '../AppRouter';
import { AuthProvider, withAuth } from '../../context/Auth';
import { DataProvider } from '../../context/Data';
import StartRoute from '../StartRoute';


// Мы оборачиваем наши роуты в несколько провайдеров
// DataProvider - предоставляет обьект data с имейлами.
// AuthProvider - предоставляет метод авторизации authorize
//                и текущий статус isAuthorized
// BrowserRouter - провайдер react-router-dom.

export default () => {
  return(
    <DataProvider>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={LoginForm}/>
            <PrivateRoute path="/app" component={AppRouter}/>

            <Redirect to='/login' />

          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </DataProvider>
    )

};