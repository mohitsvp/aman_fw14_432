import {mult,add} from "./calc.js";
import "./index.css";

console.log(mult(4,4));



console.log(add(2,2));

const h1 = document.createElement("h1");
h1.innerText="welcome to webpack";
h1.classList.add("redtext");

document.querySelector("#root").appendChild(h1);