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
  width: 300px;
  height: 450px;

  background-color: rgb(221, 221, 221);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  @media (min-width: 768px) {
    width: 540px;
  }
  .rejectUser {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    border: none;
    padding: 10px;
    color: white;
    width: 20px;
    height: 20px;
    font-weight: bolder;
    border-radius: 8px;
  }

  .rejectUser:hover {
    background-color: #c90000;
  }

  .AdminButtonEdit {
    margin: 0px 30px;
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    font-weight: bolder;
    letter-spacing: 1px;
    text-decoration: none;
    color: white;
    background: transparent;
    cursor: pointer;
    transition: ease-out 0.5s;
    border: 2px solid blue;
    border-radius: 10px;
    box-shadow: inset 0 -100px 0 0 blue;
  }
  .AdminButtonEdit:hover {
    color: blue;
    border: 2px solid blue;
    box-shadow: inset 0 0 0 0 blue;
  }

  .AdminButtonRemove {
    margin: 0px 30px;
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    letter-spacing: 1px;
    text-decoration: none;
    color: white;
    background: transparent;
    cursor: pointer;
    transition: ease-out 0.5s;
    border: 2px solid red;
    border-radius: 10px;
    box-shadow: inset 0 -100px 0 0 red;
  }
  .AdminButtonRemove:hover {
    color: red;
    border: 2px solid red;
    box-shadow: inset 0 0 0 0 red;
  }

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
    flex-direction: column;
    padding: 10px;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
    border: 2px solid black;
    height: 150px;
    max-width: 90%;
    margin-bottom: 20px;
    border-radius: 10px;
  }

  .notPerson {
    display: flex;
    width: 100%;
    font-size: 20px;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    text-shadow: 3px 3px 14px black;
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
  overflow-y: scroll;
  height: 360px;
  .inp {
    position: relative;
    margin: auto;
    width: 95%;
    max-width: 90%;
    min-width: 90%;
    text-align: start;
    border-radius: 3px;
    overflow: hidden;
    background-color: #fff;
    height: auto;
  }

  .inp .label {
    position: absolute;
    top: 17px;
    left: 14px;
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

export const DivBtnRequest = styled.span`
  margin-right: 10px;
  display: flex;
  justify-content: space-between;

  width: 50px;

  .acceptUser {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    border: none;
    padding: 10px;
    color: white;
    width: 20px;
    height: 20px;
    font-weight: bolder;
    border-radius: 8px;
  }

  .acceptUser:hover {
    background-color: #39d32e;
  }

  .rejectUser {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    border: none;
    padding: 10px;
    color: white;
    width: 20px;
    height: 20px;
    font-weight: bolder;
    border-radius: 8px;
  }

  .rejectUser:hover {
    background-color: #c90000;
  }
`;

export const CardGuests = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
  width: 100%;
  height: 50px;
  margin-top: 5px;
  margin-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
  font-size: 1.1rem;
  border-radius: 10px;
  box-shadow: 1px 2px 5px 2px rgba(0, 0, 0, 0.66);
  text-shadow: 0px 0px 10px rgba(150, 150, 150, 1);
`;

export const CardRequests = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
  width: 100%;
  height: 50px;
  margin-top: 5px;
  margin-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
  font-size: 1.1rem;
  border-radius: 10px;
  box-shadow: 1px 2px 5px 2px rgba(0, 0, 0, 0.66);
  text-shadow: 0px 0px 10px rgba(150, 150, 150, 1);
`;

export const AdminHeader = styled.div`
  width: 100%;
  height: 43px;
  background-color: var(--orange);
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin-left: 15px;
    color: #fff;
  }
  button {
    margin-right: 15px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  height: 40px;

  button:hover {
    background-color: #fff;
    color: var(--orange);
    border: 2px solid var(--orange);
  }
`;

export const AdminButton = styled.button`
  width: 120px;
  height: 25px;
  border-radius: 20px;
  color: #fff;
  font-weight: bolder;
  font-size: 1rem;
  background-color: var(--yellow);

  border-style: none;
`;

export const ButtonRemoveGuest = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  color: #fff;
  font-weight: bolder;
  font-size: 1rem;
  background-color: var(--orange);

  border-style: none;
`;

export const SpanOwner = styled.span`
  color: var(--orange);
  font-weight: bold;

  ::before {
    content: "Host";
  }
`;
