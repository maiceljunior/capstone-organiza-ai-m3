import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50vw;
  height: auto;
  background: rgb(236, 236, 236);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  .refreshList {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin-bottom: 7px;
  }

  .btnRefresh {
    text-transform: uppercase;
    padding: 3px;
  }

  .positionBtns {
    display: flex;
    margin-top: 20px;
  }

  .ulPosition {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .ulPosition > span {
    align-self: center;
    margin-bottom: 3px;
    font-size: 18px;
    font-weight: bold;
  }

  ul {
    display: flex;
    flex-direction: row;
    padding: 5px;
    justify-content: flex-start;
    align-items: center;
    overflow-x: scroll;
    border: 1px solid black;
    height: 90px;
    max-width: 90%;
  }

  ul > li {
    border: 1px solid black;
    width: 10%;
    margin-right: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
  }

  .exit {
    z-index: 3000;
    border: none;
    font-size: 20px;
    background-color: transparent;
    color: white;
    font-weight: bold;
  }

  .btnExit {
    position: relative;
    display: inline-block;
    margin: 10px;
    padding: 11px 30px;
    text-align: center;
    font-size: 18px;
    letter-spacing: 1px;
    text-decoration: none;
    color: red;
    background: transparent;
    cursor: pointer;
    transition: ease-out 0.5s;
    border: 2px solid red;
    border-radius: 10px;
    box-shadow: inset 0 0 0 0 red;
  }

  .btnExit:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 red;
  }

  .btnExit:active {
    transform: scale(0.9);
  }

  .btnEnter {
    position: relative;
    display: inline-block;
    margin: 10px;
    padding: 11px 30px;
    text-align: center;
    font-size: 18px;
    letter-spacing: 1px;
    text-decoration: none;
    color: green;
    background: transparent;
    cursor: pointer;
    transition: ease-out 0.5s;
    border: 2px solid green;
    border-radius: 10px;
    box-shadow: inset 0 0 0 0 green;
  }

  .btnEnter:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 green;
  }

  .btnEnter:active {
    transform: scale(0.9);
  }
`;

export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .inp {
    position: relative;
    margin: auto;
    width: 95%;
    max-width: 90%;
    border-radius: 3px;
    overflow: hidden;
  }

  .inp .label {
    position: absolute;
    top: 17px;
    left: 0px;
    font-size: 20px;
    color: var(--yellow);
    font-weight: bold;
    transform-origin: 0 0;
    transform: translate3d(0, 0, 0);
    transition: all 0.2s ease;
    pointer-events: none;
  }

  .inp .focus-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.05);
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
  }

  .inp input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    border: 0;
    font-family: inherit;
    padding: 21px 10px 0 15px;
    height: 56px;
    font-size: 16px;
    font-weight: 600;
    background: rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.3);
    color: #000;
    transition: all 0.15s ease;
  }

  .inp input:hover {
    background: rgba(0, 0, 0, 0.04);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.5);
  }

  .inp input:not(:-moz-placeholder-shown) + .label {
    color: rgba(0, 0, 0, 0.5);
    transform: translate3d(0, -12px, 0) scale(0.75);
  }

  .inp input:not(:-ms-input-placeholder) + .label {
    color: rgba(0, 0, 0, 0.5);
    transform: translate3d(0, -12px, 0) scale(0.75);
  }

  .inp input:not(:placeholder-shown) + .label {
    color: rgba(0, 0, 0, 0.5);
    transform: translate3d(0, -12px, 0) scale(0.75);
  }

  .inp input:focus {
    background: rgba(0, 0, 0, 0.05);
    outline: none;
    box-shadow: inset 0 -2px 0 #0077ff;
  }

  .inp input:focus + .label {
    color: #0077ff;
    transform: translate3d(0, -12px, 0) scale(0.75);
  }

  .inp input:focus + .label + .focus-bg {
    transform: scaleX(1);
    transition: all 0.1s ease;
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    margin-top: 20px;
  }

  div > h2 {
    margin-right: 10px;
  }
`;
