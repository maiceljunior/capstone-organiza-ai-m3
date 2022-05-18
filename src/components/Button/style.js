import styled from "styled-components";

export const ButtonComponent = styled.button`
  background: ${(props) => (props.redSchema ? "#6A040F" : "#F48C06")};
  color: var(--white);
  height: 45px;
  border-radius: 8px;
  border: none;
  width: 150px;
  min-width:55px;
  font-size: 1rem;
  :hover {
    border: 2px solid var(--white);
  }
  @media (max-width:800px){
   width:90px;
  }
  @media (max-width:500px){
   width:70px;
  }
  @media (max-width:500px){
   font-size:0.9rem;
  }
`;
