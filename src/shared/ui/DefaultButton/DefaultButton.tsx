import React, { ReactNode} from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<DefaultButtonProps>`
    align-items: center;
    justify-content: center;
    display: flex;
    padding: ${(props) => props.padding};
    height: ${(props) => props.height};
    border: ${(props) => (props.border ? `1px solid ${props.border}` : "none")};
    background: ${(props) => props.background};
    width: ${(props) => props.width};
    border-radius: ${(props) => props.borderRadius};
    margin-left: ${(props) => props.marginLeft};
    margin-top: ${(props) => props.marginTop};
`;

export type DefaultButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    padding: string;
    height: string;
    width: string;
    border: string;
    background: string;
    children: ReactNode;
    borderRadius: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    marginLeft: string;
    marginTop: string;
};

const DefaultButton: React.FC<DefaultButtonProps> = (props) => {
    return <StyledButton {...props}>
        {props.children}
    </StyledButton>
};

export {DefaultButton};

/*
import styled from 'styled-components';

export type DefaultButtonProps {
    bgcolor: string;
}

export const DefaultButton = styled.button<DefaultButtonProps>`
    background-color: ${props => props.bgcolor};
    color: black;
    font-size: 16px;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    margin: 1rem;
    cursor: pointer;
    border: none;
    outline: none;
    &:hover {
        background-color: green;
        color: white;
}
`;
*/

