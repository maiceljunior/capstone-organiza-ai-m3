import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;

    }

    body {
        font-family: 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
    }

    li {
        list-style: none;
    }

    :root{
        --black: #000000;
        --grey-dark: #212529;
        --grey: #868E96;
        --grey-light:#E9ECEF;
        --white-dark: #F8F9FA;
        --white: #FFFFFF;
        --blue-dark: #03071E;
        --brown: #370617;
        --red-dark: #6A040F;
        --red: #9D0208;
        --red-light: #DC2F02;
        --orange: #E85D04;
        --gold: #F48C06;
        --yellow: #FAA307;
    }
`;
