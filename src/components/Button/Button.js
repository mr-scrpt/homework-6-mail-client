import React, { PureComponent } from 'react';
import './Button.css';


const Button = ({ className, children, ...rest }) => (
    <button {...rest} className={`${className} button` } type="submit">
      {children}
    </button>
  );
export {Button};
