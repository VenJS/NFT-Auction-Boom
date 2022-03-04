import React from "react";

export default function Logo({ type }) {
  return (
    <div>
      {type == "muted" ? (
        <img src="images/logo-muted.svg" alt="logo"></img>
      ) : (
        <img src="images/logo.svg" alt="logo"></img>
      )}
    </div>
  );
}
