// import React from 'react'
// import './button.css';
import styled from 'styled-components';

const Button = styled.button`
width: 150px;
height: 30px;
background: ${props => props.background || "transparent"};
color:${props => props.color || "black" } ;
font-weight:500;
border:${props => props.border || "none"};
margin-left:10px;
margin-top: 10px;
`;

export default Button