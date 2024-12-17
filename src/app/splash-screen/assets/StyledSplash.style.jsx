'use client';
import styled from "styled-components";

export const StyledSplashScreen = styled.div`
    width: 100%;
    p.brand-name{
        text-align: right;
        padding-right: 30px;
        margin-top: 50px;
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 22px;
    }
    .parent-icon{
        margin-top: 40px;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .parent-title{
        display: flex;
        flex-direction: column;
        line-height: 50px;
        margin-top: 70px;
        h3{
            margin: 0;
            font-family: 'Roboto', sans-serif;
            font-size: 50px;
            margin-left: 28px !important;
        }
        .title-yellow{
            color: #FCA34D;
            text-decoration: underline 3px;
            text-underline-offset: 5px;
        }
    }
    p{
        margin-top: 20px;
        margin-left: 28px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: #524B6B;
        line-height: 22px;
        letter-spacing: 0.8px;
    }
    .parent-btn{
        width: 100%;
        display: flex;
        justify-content: end;
        padding-bottom: 40px;

        button{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: #130160;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 25px;

            img{
                margin-right: 2px;
            }
        }
    }
`;