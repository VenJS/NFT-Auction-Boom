import React from "react";
import logo from './logo1.jpg'


export default function Logo(props) {
  return (
    <div>
      {props.type == "muted" ? (
        <img src='images/logo-muted.svg' alt='logo'></img>
      ) : props.type == null ? (
        <img src='images/logo.svg' alt='logo'></img>
      ) : null}
    </div>
  );
}
