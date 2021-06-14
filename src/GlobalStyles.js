import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
*box {
    box-sizing: border-box;
}
body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    color: whitesmoke;
    overflow-x: hidden;
    @media only screen and (min-width: 1200px) {
    width: 84%;
    }
    @media only screen and (min-width: 1024px) {
    display: flex;
    }
    @media only screen and (max-width: 1024px) {
    margin-bottom: 2rem;
    }
}
`;
