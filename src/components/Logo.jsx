import React from "react";


const Logo = props =>  { const {type} = props
  return (
    <div >
      {type == "muted" ? (
        <img src='images/logo-muted.svg' alt='logo'></img>
      ) : type == null ? (
        <img src='images/logo.svg' alt='logo'></img>
      ) : null}
    </div>
  );
}

export default Logo