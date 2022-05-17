import styled from "styled-components";

export const ButtonComponent = styled.button`
  background: ${(props) => (props.redSchema ? "#6A040F" : "#F48C06")};
  color: var(--white);
  height: 45px;
  border-radius: 8px;
  border: none;
  width: 100%;
  font-size: 1rem;
  :hover {
    border: 2px solid var(--white);
  }
`;
