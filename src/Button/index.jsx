import React from "react";
import "./button.scss";

export const Button = (props) => {
  return (
    <div class="input-wrap">
      <button
        id={props.id}
        onClick={(e) => {
          props.handleInput(props.name);
        }}
      >
        {props.name}
      </button>
    </div>
  );
};
