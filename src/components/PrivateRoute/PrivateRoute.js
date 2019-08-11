import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  // Реализуйте приватный роут.
  // Он должен проверять статус авторизации
  // и перенаправлять пользователя на страницу логина,
  // если тот не авторизован.
  renderRoute = (routProps) => {
    const {component: RoteComponent, isAuthorized} = this.props;
    return(
      isAuthorized ? <RoteComponent {...routProps} /> : <Redirect to='/'/>
    )
  };

  render() {
    const {component, ...rest} = this.props;
    return(
      <Route {...rest} render={this.renderRoute}/>
    )
  }

}
//<Route {...rest} render={routeProps=> isAuthorized ? (<RoteComponent {...routeProps}/>) : (<Redirect to="/"/>)}/>
export default withAuth(PrivateRoute);
