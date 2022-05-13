import styled from 'styled-components'

export const MainRenderList = styled.main`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 80%;
min-height: 490px;
align-items: flex-start;
`;

export const MainRenderListCreateEvent = styled(MainRenderList)`
justify-content: flex-start;
margin-top: 30px;
`;

export const MainRenderListFriends = styled(MainRenderList)`
justify-content: flex-start;
margin-top: 30px;
`;

export const ContentRenderList = styled.div`
width: 100%;
min-height: 350px;
background: var(--white-dark);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
display: flex;
    align-items: flex-start;
    justify-content: center;

ul{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 20%;
};
`

export const ContentRenderListCreateEvent = styled(ContentRenderList)`
flex-direction: column;
align-items: center;

form{
    width: 90%;
height: 95%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

ul{
    justify-content: center;
    min-height: 10%;
};

}
`

export const ContentRenderFriends = styled(ContentRenderList)`
flex-direction: column;
align-items: center;
justify-content: center;
ul{
    justify-content: center;
    min-height: 10%;
};

}
`

export const DivInputNFriends = styled.div`
width: 90%;
height: 90%;
display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
`

export const SearchPeople = styled.div`
width: 85%;
display: flex;
justify-content: space-evenly;
padding: 10px;
    background-color: var(--grey-light);
    border-radius: 5px;
        align-items: center;

    button{
        width: 30px;
        height: 30px;
        border: 1px solid var(--black);
        border-radius: 50%;

    }
`

export const Guests = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: var(--grey);
padding: 10px;
    border-radius: 5px;
`

export const DivSearch = styled.div`
width: 100%;
height: 7%;
display: flex;
align-items: center;
    justify-content: space-between;

    input{
        width: 65%;
        height: 90%;
    }

    button{
        width: 77px;
        height: 85%;
    }

    @media (min-width: 425px){
        justify-content: flex-start;

        button{
            margin-left: 30px;
        }
    }
`
export const FiltButtons = styled.div`
height: 50px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;

button{
    width: 25%;
    height: 75%;
}
`