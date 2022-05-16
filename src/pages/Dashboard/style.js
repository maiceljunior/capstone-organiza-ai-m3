import styled from "styled-components";

export const Main = styled.main`
  display: flex;

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
