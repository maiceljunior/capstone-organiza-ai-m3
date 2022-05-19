import styled from "styled-components";

export const ButtonComponent = styled.button`
  background: ${(props) => (props.redSchema ? "#6A040F" : "#F48C06")};
  color: var(--white);
  height: 45px;
  border-radius: 8px;
  border: none;
  width: 150px;
  min-width: 45px;
  font-size: 1rem;
  :hover {
    border: 2px solid var(--white);
  }
  @media (max-width: 1027px) {
    width: 90px;
  }
  @media (max-width: 687px) {
    width: 70px;
  }
  @media (max-width: 554px) {
    font-size: 0.7rem;
    width:45px;
  }
  @media (max-width: 602px) {
    font-size: 0.7rem;
  }
  @media (max-width: 440px) {
    width: 20px;
    height:25px;
    font-size:0.5rem;
  }
`;
