import styled from "styled-components";

export const LoginStartContainer = styled.div`
    background: #14904C;
    font-family: "Montserrat Light";
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const LoginStartTitle = styled.h1`
    color: white;
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 180px;
    text-align: center;
`


export const LoginStartText = styled.p`
    color: white;
    font-size: 12px;
    text-align: center;
`

export const LoginStartButton = styled.button`
    color: white;
    background-color: #94C6AA;
    border-radius: 10px;
    border: none;
    padding: 12px 10px;
    font-family: "Montserrat Light";
    font-size: 14px;
    cursor: pointer;
    top: 43%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    
    &:hover {
        background-color: darkgreen;
    }
    
    &:focus {
        outline: none;
    }
    
`