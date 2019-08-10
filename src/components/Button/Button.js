import React, { PureComponent } from 'react';
import './Button.css';


const Button = (props) => {
  const { className, children, ...rest } = props;
  return(
    <button {...rest} className={`${className} button` } type="submit">
      {children}
    </button>
  )
};
export {Button};
