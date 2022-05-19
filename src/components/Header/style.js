import styled from "styled-components";

export const StyledHeaderOrange = styled.header`
  width: 100vw;
  height: 69px;
  background-color: var(--orange);
  display: flex;
  justify-content: space-around;
  align-items: center;

  .logo {
    width: 400px;
  }

  @media (max-width: 606px) {
    .logo {
      width: 300px;
    }
  }

  @media (max-width: 390px) {
    .logo {
      width: 200px;
    }
  }
`;

export const StyledHeaderWhite = styled.header`
  width: 100%;
  height: 115px;
  background-color: var(--white-dark);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivHeader = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
