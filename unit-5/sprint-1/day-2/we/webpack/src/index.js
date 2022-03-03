import {mult,add} from "./calc.js";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
// import img from "./img/webpacklogo.png"

console.log(mult(4,4));



console.log(add(2,2));

// const h1 = document.createElement("h1");
// h1.innerText="welcome to webpack todo";
// h1.classList.add("redtext");

// const el = React.createElement("h1",{className:"redtext"},"hello",React.createElement("p",null,"welcome to React"));

// const el1 = React.createElement("h2",{className:"pinktext"},"hello welcome to React");

ReactDOM.render(
<div className="redtext">
  hello
  <h1>world</h1>
  <input />
  <button>submit</button>
  {/* <img src=img ></img> */}
</div>,
document.querySelector("#root"));



