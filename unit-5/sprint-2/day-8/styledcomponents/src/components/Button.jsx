// import React from 'react'
// import './button.css';
import styled from 'styled-components';

const Button = styled.button`
width: 100px;
height: 60px;
background: ${({theme}) => theme === "light" ? "salmon" : "crimson"};
color: white;
font-weight: bold;
border-radius: 10px;
border: none;
margin-left:10px;

&:hover{
    background: ${({theme}) => theme === "light" ? "crimson" : "salmon"};
    cursor: pointer;  
}
`;

export default Button