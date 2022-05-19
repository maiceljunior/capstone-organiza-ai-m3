import styled from "styled-components";

export const ContainerGeral = styled.div`
  background-color: var(--grey-light);
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const FakeButtonLink = styled.div`
  height: 40px;
  width: 30%;
  min-width: 200px;
  align-items: center;
  display: flex;
  justify-content: space-around;

  .link {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: var(--yellow);
    height: 30px;
    width: 200px;

    border-radius: 20px;
    text-decoration: none;
    color: #fff;
    font-size: 1.3rem;
    margin-right: 15px;

    @media (max-width: 400px) {
      font-size: 0.8rem;
      width: 140px;
    }
  }
  .link:hover {
    background-color: var(--orange);
    color: #fff;
  }

  h4 {
    font-size: 1.3rem;
    font-weight: bolder;

    @media (max-width: 400px) {
      font-size: 1rem;
      width: 100px;
      min-width: 70px;
    }
  }
  @media (max-width: 400px) {
    font-size: 1rem;
    width: 140px;
    min-width: 70px;
  }
`;
