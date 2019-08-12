// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React from 'react';
import Style from './MailList.module.css';
import { Switch, Route, Link } from 'react-router-dom';
import InboxMail from "../InboxMail";

const MailList = (props) => {
  const {styles, list, match} = props;
  console.log(match);

  const classComp = `${Style.container} ${styles}`;
  const routeList =  list && list.map(item=>{
    return <Route path={`${item.id}`} render={()=> 'Homeee'} key={item.id} exact/>

  });


  const renderList =  list && list.map(item=>{
    const descr = item.body.slice(0, 52) + '...';
    console.log(`${match.url}/${item.id}`);
    return <Link to={`${match.url}/${item.id}`} className={Style.link} key={item.id}>{descr}</Link>
  });

  return(
    <React.Fragment>
      <div className={classComp}>
          {renderList}

        <Route path='/app/inbox/yGmwergEGcxbgssBXsVGyH6b' render={()=> <div>3333333</div>} exact/>


      </div>


    </React.Fragment>
  )
};
export default MailList;
