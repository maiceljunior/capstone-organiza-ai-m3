import styled, { keyframes } from "styled-components";

export const Body = styled.div`
  background-image: linear-gradient(to bottom right, #faf8f5, #a59e9a);
`;
export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .logo {
    margin-top: 20px;
    width: 95%;
    cursor: pointer;
  }
  @media (min-width: 760px) {
    .logo {
      width: 50%;
    }
  }
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    text-align: center;
    font-size: 13px;
    margin: 10px;
  }

  h1 {
    height: 80px;
    text-align: center;
    color: var(--orange);
    font-size: 25px;
    margin: 10px;
  }
  @media (min-width: 760px) {
    p {
      font-size: 18px;
      width: 57%;
    }
    h1 {
      height: 100px;
      font-size: 35px;
    }
  }
`;

export const ContentUl = styled.ul`
  list-style-type: style none;
  width: 80%;
  @media (min-width: 760px) {
    width: 60%;
  }
`;

export const Developer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  border-radius: 15px;
  margin: 10px;
  background-color: var(--grey-light);

  img {
    width: 90px;
    height: 90px;
    border: 0 solid var(--brown);
    border-radius: 100px;
    box-shadow: 10px 5px 5px black;
    margin: 10px;
  }
  h3 {
    color: var(--black);
    font-size: 15px;
  }
  span {
    color: var(--grey);
    font-size: 10px;
    margin: 5px;
  }

  :hover {
    box-shadow: 10px 5px 15px black;
  }
  @media (min-width: 760px) {
    height: 200px;
    img {
      width: 150px;
      height: 150px;
      margin: 20px;
    }
    h3 {
      font-size: 23px;
    }
    span {
      font-size: 15px;
      margin: 5px;
    }
  }
`;

export const DivInfo = styled.div`
  flex: 1;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: stretch;
  a {
    color: red;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
  }
  @media (min-width: 760px) {
    a {
      font-size: 23px;
    }
  }
`;
export const ContainerIcons = styled.div`
  display: flex;
`;
export const appearFromRight = keyframes`
from{
    opacity:0;
    transform: translateX(50px);
}
to{
    opacity:1;
    transform: translateX(0px)
    
}
`;
export const appearFromLeft = keyframes`
from{
    opacity:0;
    transform: translateX(-50px);
}
to{
    opacity:1;
    transform: translateX(0px)
    
}
`;

export const AnimationContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 2s;
`;

export const AnimationContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 2s;
`;
