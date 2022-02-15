const { response } = require("express");

function onClickHandler(user){
    user = JSON.parse(user);
    alert(`${user.first_name} ${user.last_name}`);
}

fetch("http://localhost:3010/users?contentType=json")
  .then((response) => response.json())
  .then((data) => console.log(data));
