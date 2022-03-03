import {mult,add} from "./calc.js";
import "./index.css";
import img from "./img/webpacklogo.png"

console.log(mult(4,4));



console.log(add(2,2));

const h1 = document.createElement("h1");
h1.innerText="welcome to webpack todo";
h1.classList.add("redtext");

const imga =document.createElement('img');
imga.src={img};

document.querySelector("#root").append(imga,h1);

document.querySelector("#save_btn").addEventListener("click",save);


function save(){
    let data=document.querySelector("#note").value;
    
    document.querySelector(".th_css").style.border="1px solid red";
    document.querySelector(".th_css").style.padding="10px";

    let row=document.createElement('tr');
    let td1=document.createElement('td');
    td1.textContent=data;
    td1.style.border="1px solid green";
    td1.style.padding="10px";

    let td2=document.createElement('button');
    td2.textContent="Completed";
    td2.style.marginLeft="10px";
    td2.style.border="1px solid green";
    td2.style.padding="10px";

    td2.addEventListener("click",deleteNote);

    row.append(td1,td2);

   document.querySelector("#note_ui").append(row);
   document.querySelector("#note_ui").style.marginTop="20px";
}

function deleteNote(event){
  event.target.parentNode.remove();
}