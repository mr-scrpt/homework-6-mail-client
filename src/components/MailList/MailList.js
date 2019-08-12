// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React from 'react';
import Style from './MailList.module.css';
import { Switch, Route, Link } from 'react-router-dom';

const MailList = (props) => {
  const {styles, list, url} = props;

  const classComp = `${Style.container} ${styles}`;
  const renderList =  list && list.map(item=>{
    const descr = item.body.slice(0, 52) + '...';
    return <Link to={`${url.path}/${item.id}`} className={Style.link} key={item.id}>{descr}</Link>
  });



  return(
    <div className={classComp}>
        {renderList}
    </div>
  )
};
export default MailList;
