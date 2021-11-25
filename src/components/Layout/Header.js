import React from "react";
import Headerimg from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>Mealz</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={Headerimg} alt="table full of delicious food" />
      </div>
    </>
  );
}
