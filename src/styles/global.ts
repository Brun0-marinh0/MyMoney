import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --red: #E52E4D;
        --blue:#5429CC;
        
        --blue-light: #6933ff;
        
        --text-title: #363f5f;
        
        --text-body:#969CB3;
        
        --background:#f0f2f5;
        --shape:#FFFFFF;

    }
    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
            //16*0,9373= 15px
        }
        @media(max-width: 768px){
            font-size: 87.5%;
            //16*0,875 = 14px
        }
    }
    body{
        background: var(---background);
        -webkit-font-smoothing:antialiased;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }



`