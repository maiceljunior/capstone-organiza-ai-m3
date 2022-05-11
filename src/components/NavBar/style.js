import styled from "styled-components";

export const Container = styled.nav`
  display: none;
  @media (min-width: 425px) {
    display: flex;
    padding: 0 10px 0 0;
    button + button {
      margin-left: 5px;
    }
  }
`;