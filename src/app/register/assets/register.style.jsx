'use client';
import styled from "styled-components";

export const StyledMessage = styled.div`
    background-color: ${({ type }) => (type === "success" ? "#4caf50" : "#f44336")};
    color: white;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 20px;
    font-size: 16px;
    
    p {
    margin: 0;
    }
`;

export const StyledRegister = styled.div`
    width: 100%;
    *{
        font-family: 'Roboto', sans-serif;
    }

    h1{
        color: #0D0140;
        text-align: center;
        margin-top: 100px;
        font-size: 35px;
    }
    p{
        text-align: center;
        font-size: 15px;
        padding: 0px 20px;
        color: #524B6B;
        line-height: 22px;
    }
    form{
        margin-top: 40px;
        padding: 0px 20px;
        display: flex;
        flex-direction: column;
        label{
            font-weight: 600;
            color: #0D0140;
            margin-bottom: 10px;
            margin-top: 20px;
        }
        .parent-pass{
            position: relative;
            display: flex;
            flex-direction: column;
        }
        input{
            height: 47px;
            border: none;
            outline: none;
            border-radius: 10px;
            /* background-color: #99ABC6; */
            box-shadow: 0px 0px 80px 0px #99abc649;
            padding-left: 30px;
            font-size: 15px !important;
        }
        img{
            width: 25px;
            position: absolute;
            bottom: 12px;
            right: 20px;
        }
        .parent-forgot{
            width: 100%;
            display: flex;
            justify-content: space-between;
            span{
                margin-top: 10px;
                text-align: right;
                color: #0D0140;
                display: flex;
                align-items: center;
            }
            label{
                display: flex;
                align-items: center;
                justify-content: space-around;
                
                span{
                    font-size: 15px;
                    font-weight: 300;
                    margin-top: 4px;
                    margin-left: 10px;
                    color: #AAA6B9;
                }


                input[type="checkbox"] {
                    padding: 0px;
                    width: 24px;
                    height: 24px;
                    background-color: #E6E1FF;
                    border-radius: 4px;
                    appearance: none;
                    outline: none;
                    cursor: pointer;
                    position: relative;
                    -webkit-tap-highlight-color: transparent;
                }

                input[type="checkbox"]:checked::after {
                    content: '✔';
                    width: 12px;
                    height: 12px;
                    position: absolute;
                    top: 27%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
        .parent-btn{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            

            button{
                width: 266px;
                height: 50px;
                margin: 20px 0px;
                border: none;
                border-radius: 6px;
                background-color: #130160;
                color: white;
                font-size: 14px;
                font-weight: bold;
            }
            button.google{
                margin-top: 0px;
                background-color: #D6CDFE;
                display: flex;
                justify-content: center;
                align-items: center;
                letter-spacing: 1px;

                span{
                    color: #FFFF;
                }
                img{
                    margin-right: 20px;
                    position: static;
                }
            }
        }
        p{
            margin: 0px;
            color: #524B6B;
            font-size: 12px;

            span{
                color: #FF9228;
                text-decoration: underline;
            }
        }
    }
`;