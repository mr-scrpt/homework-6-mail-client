// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css
import React, {Component} from 'react';
import Style from './AppRouter.module.css';
import {Switch, Route, NavLink, Redirect} from 'react-router-dom';
import {menuItem} from './menuItem';



import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import InboxMail from '../InboxMail';
import OutboxMail from '../OutboxMail';


export default class AppRouter extends Component {

  render() {
    const {match} = this.props;

    return (
      <div className={Style.wrapper}>
        <div className={Style.container}>
          <nav className={Style.nav}>
            <ul className={`${Style.navList} t-nav-list`}>
              {menuItem.map(item => {
                const classNames = `${Style.link} t-link-${item.classNames} `; //${match.isExact ? 'active': ''}
                return (
                  <li className={Style.navElement} key={item.id}>
                    <NavLink to={`${match.path}/${item.link}`} className={classNames} activeClassName='active'
                             exact>{item.label}</NavLink>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className={Style.content}>
            <h3 className={Style.title}>
              <Switch>
                <Route path={`${match.path}`} render={() => 'Homeee'}/>
                <Route path={`${match.path}/inbox`} render={() => 'InboxList'}/>
                <Route path={`${match.path}/outbox`} render={() => 'OutboxList'}/>
                <Route path={`${match.path}/outbox/:id`} render={() => 'OutboxList'}/>
                <Route path={`${match.path}/inbox/:id`} render={() => 'InboxList'}/>
              </Switch>
            </h3>

            <Switch>
              <Route path={`${match.path}`} component={Home} exact/>
              <Route path={`${match.path}/inbox`} component={InboxList} exact/>
              <Route path={`${match.path}/outbox`} component={OutboxList} exact/>
              <Route path={`${match.path}/outbox/:id`} component={OutboxMail}/>
              <Route path={`${match.path}/inbox/:id`} component={InboxMail}/>
              <Redirect to="/app"/>
            </Switch>

          </div>


        </div>
      </div>

    )
  }
};

