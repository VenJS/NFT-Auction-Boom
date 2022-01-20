import React from "react";


export default function Logo(props) {
  return (
    <div >
      {props.type == "muted" ? (
        <img src='images/logo-muted.svg' alt='logo'></img>
      ) : props.type == null || props.type == 'default' ? (
        <img src='images/logo.svg' alt='logo'></img>
      ) : null}
    </div>
  );
}
