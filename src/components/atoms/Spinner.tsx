import styled, { keyframes } from "styled-components";
import React from "react";

// Credits to https://codepen.io/kerwin/pen/GqOXbA
// I ported it to styled-components and made size dynamic :)

const blink = keyframes`
  from { background: #eee;}
  to { background: #e74c3c; }
`;

const shake = keyframes`
  0 { transform: translate(0, 0) rotate(0); }
  20% { transform: translate(-10px, 0) rotate(-20deg); }
  30% { transform: translate(10px, 0) rotate(20deg); }
  50% { transform: translate(-10px, 0) rotate(-10deg); }
  60% { transform: translate(10px, 0) rotate(10deg); }
  100% { transform: translate(0, 0) rotate(0); }
`;

const fall = keyframes`
  0% { top: -200px }
  60% { top: 0 }
  80% { top: -20px }
  100% { top: 0 }
`;

const size: number = 120;
const border: number = size * 0.05;

const PokeBall = styled.div`
  position: relative;
  width: ${size}px;
  height: ${size}px;
  background: #fff;
  border: ${border}px solid #000;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset -10px 10px 0 10px #ccc;
  box-sizing: border-box;
  animation: ${fall} .25s ease-in-out,
             ${shake} 1.25s cubic-bezier(.36,.07,.19,.97) infinite;
&::before,
&::after {
  content:"";
  position: absolute;
}
&::before {
  background: red;
  width: 100%;
  height: 50%;
}
&::after {
  top: calc(50% - ${border}px);
  width: 100%;
  height: ${border * 2}px;
  background: #000;
}
`;

const PokeBallButton = styled.div`
  position: absolute;
  top: calc(50% - ${size / 6}px);
  left: calc(50% - ${size / 6}px);
  width: ${size / 3}px;
  height: ${size / 3}px;
  background: #7f8c8d;
  border: ${border}px solid #fff;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 ${border}px black;
  animation: ${blink} .5s alternate infinite;
  box-sizing: border-box;
`;

export const Spinner = () => (
  <PokeBall><PokeBallButton /></PokeBall>
);