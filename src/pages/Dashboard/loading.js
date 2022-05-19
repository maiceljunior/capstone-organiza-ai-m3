import styled from "styled-components";
export const Loading = styled.div`
  width: 36px;
  height: 36px;
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-right-color: var(--white);
  animation: spinner-a4dj62 1s infinite linear;
  ::before,
  ::after {
    content: "";
    grid-area: 1/1;
    margin: 2px;
    border: inherit;
    border-radius: 50%;
    animation: spinner-a4dj62 2s infinite;
  }
  ::after {
    margin: 8px;
    animation-duration: 3s;
  }
  @keyframes spinner-a4dj62 {
    100% {
      transform: rotate(1turn);
    }
  }
`;

export const ListPref = styled.div`
  --uib-size: 80px;
  --uib-speed: 1.55s;
  --uib-color: black;
  --uib-line-weight: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--uib-line-weight);
  width: var(--uib-size);
  border-radius: calc(var(--uib-line-weight) / 2);
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--uib-color);
    opacity: 0.1;
  }

  ::after {
    content: "";
    height: 100%;
    width: 100%;
    border-radius: calc(var(--uib-line-weight) / 2);
    animation: wobble var(--uib-speed) ease-in-out infinite;
    transform: translateX(-90%);
    background-color: var(--uib-color);
  }

  @keyframes wobble {
    0%,
    100% {
      transform: translateX(-90%);
    }

    50% {
      transform: translateX(90%);
    }
  }
`;
