import React from "react";

import auth from "./auth";

export const AppLayout = (props) => {
  return (
    <div>
      <h2>App Layout</h2>
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
};
