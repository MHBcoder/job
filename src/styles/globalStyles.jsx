"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: Vazir;
        src: url(/fonts/Vazir-Medium.woff);
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #F9F9F9;
    }
`;
