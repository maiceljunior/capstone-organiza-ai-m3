import styled from 'styled-components'

export const StyledHeaderOrange = styled.header`
  width: 100%;
  height: 69px;
  background-color: var(--orange);
  display: flex;
  justify-content: space-around;
  align-items: center;

  div{
    width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
  }

  img{
      height: 54px;
    }
  }
`

export const StyledHeaderWhite = styled.header`
  width: 100%;
  height: 115px;
  background-color: var(--white-dark);
  display: flex;
  align-items: center;
  justify-content: center;

  img{
      width: 290px;
    height: 80px;
  }
`