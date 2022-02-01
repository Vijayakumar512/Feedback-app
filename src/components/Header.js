import React from 'react';

function Header({text}){
  return(
    <header style={headerstyle}>
    <div className="container">
    <h2> {text}</h2>
    </div>
    </header>
  );
}

const headerstyle={  
  backgroundColor:'rgba(0,0,0,0.4)',
  color:'#ff6a95'
};

Header.defaultProps={
  text:'Feedback UI',
}
export default Header;
