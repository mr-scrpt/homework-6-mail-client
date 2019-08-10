import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  // Реализуйте приватный роут.
  // Он должен проверять статус авторизации
  // и перенаправлять пользователя на страницу логина,
  // если тот не авторизован.
  render() {
    const {component: RoteComponent, isAuthorized, ...rest} = this.props;
    return(
      <React.Fragment>
        {isAuthorized ? <RoteComponent {...rest} /> : <Redirect to='/login'/>};
      </React.Fragment>

    )
  }

}
//<Route {...rest} render={routeProps=> isAuthorized ? (<RoteComponent {...routeProps}/>) : (<Redirect to="/"/>)}/>
export default withAuth(PrivateRoute);
