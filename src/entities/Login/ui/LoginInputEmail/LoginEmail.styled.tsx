import styled from "styled-components";
import vk from '../../../../shared/assets/vk.png';
export const LoginEmailContainer = styled.div`
    background: #14904C;
    font-family: "Montserrat Light";
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    
`

export const LoginEmailTitle = styled.h1`
    color: white;
    font-size: 20px;
    margin-bottom: 30px;
    margin-top: 260px;
    text-align: center;
`

export const LoginEmailInput = styled.input`
    border: none;
    width: 90%;
    border-radius: 10px;
    background-color: #94C6AA;
    color: white;
    height: 43px;
    font-size: 14px;
    font-family: Montserrat;
    padding: 0 15px;    
`

export const LoginEmailError = styled.p`
    color: #fff300;
    margin-bottom: 6px;
`

export const LoginEmailBottom = styled.p`
    color: #FFF;
    font-family: Montserrat;
    font-size: 12px;
    margin-top: 10%;
`

export const LoginEmailButton = styled.button`
    background-image: url(${vk});
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 14px;
    border: none;
    margin-top: 30px;
`