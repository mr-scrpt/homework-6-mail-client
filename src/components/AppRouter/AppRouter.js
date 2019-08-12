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
import React, { Component } from 'react';
import Style from './AppRouter.module.css';
import { Switch, Route, Link } from 'react-router-dom';
import {menuItem} from './menuItem';
import {withData} from "../../context/Data";
import {withAuth} from "../../context/Auth";

import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';


export default class AppRouter extends Component{

    render() {
      const {match, isExact} = this.props;

      return(
        <div className={Style.wrapper}>
          <div className={Style.container}>
            <nav className={Style.nav}>
              <ul className={Style.navList}>
                {menuItem.map(item => {
                  const classNames = `${Style.link} t-link-${item.link} `; //${match.isExact ? 'active': ''}
                  return(
                    <li className={Style.navElement} key={item.id}>
                      <Link to={`${match.path}/${item.link}`} className={classNames}>{item.label}</Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
            <div className={Style.content}>
              <h3 className={Style.title}>
                <Switch>
                    <Route path={`${match.path}`} render={()=> 'Homeee'} exact/>
                    <Route path={`${match.path}/inbox`} render={()=> 'InboxList'} exact/>
                  <Route path={`${match.path}/outbox`} render={()=> 'OutboxList'} exact/>

                </Switch>
              </h3>


                <Switch>
                  <Route path={`${match.path}`} component={Home} exact/>
                  <Route path={`${match.path}/inbox`} component={withData(InboxList)} exact/>
                  <Route path={`${match.path}/outbox`} component={withData(OutboxList)} exact/>
                </Switch>

              {/*{menuItem.map(item => <Route to={item.link} component={item.componentName} key={item.id} exect/> )}*/}
            </div>


          </div>
        </div>

      )
    }
};

