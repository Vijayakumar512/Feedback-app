import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function Button({children,version,type,isDisabled}){

  return(
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
    {children}
    </button>
  );
}

Button.defaultProps={
  version:'primary',
  type:'submit',
  isDisabled:false
}
Button.propTypes={
  children:PropTypes.node.isRequired,
  version:PropTypes.string.isRequired,
  type:PropTypes.string.isRequired,
  isDisabled:PropTypes.bool.isRequired,
}
export default Button;
