import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    transition: background-color 0.8s linear, color 0.5s linear;
    
  .nav-menu {
    height: 50vh;
    margin-left: 2vw;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    background-color: var(--orange);
    z-index: 3000;
  }

  .navbar-toggle {
    background-color: var(--orange);
  }

  .navbar {
    background-color: var(--black);
    margin-top: 30vh;
  }

  .nav-text > a:hover {
    background-color: #6a040f;
  }

  .nav-text > a > span {
    color: var(--white);
    font-weight: bold;
  }

  #Search {
    width: 100%;
    height: 45px;
    align-items: center;
    align-self: center;
    margin: 0;
  }

  p {
    display: none;
  }
`;

export const DarkLightButton = styled.button`
  outline: none;
  border: 1px solid;
  border-color: ${(props) => props.theme.button.borderColor};
  border-radius: 2px;
  background-color: ${(props) => props.theme.button.backgroundColor};
  color: ${(props) => props.theme.button.textColor};
  padding: 0.5em 1em;
  position: absolute;

  font-size: 1rem;
  letter-spacing: 0.7px;
  cursor: pointer;
  transition: opacity 0.4s linear, color 0.4s linear,
    background-color 0.4s linear;

  &:hover {
    opacity: 0.65;
  }
`;
