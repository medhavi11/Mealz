import React from "react";
import classes from "./Input.module.css";
export default function Input(props) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* trick to pass all configuration data to input field , 
      which comes from a prop  */}
      {/* use spread operator to spread the inputs  */}
      {/* makes surethat all key */}
      {/* value pairs we receive as input  */}
      {/* are added as props to input field */}
      <input {...props.input} />
    </div>
  );
}
