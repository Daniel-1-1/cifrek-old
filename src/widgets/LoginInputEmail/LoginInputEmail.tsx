
import React, { useState } from 'react';
import {LoginEmailContainer, LoginEmailTitle, LoginEmailError} from "../../entities/Login/ui/LoginInputEmail/LoginInputEmail.styled.tsx";
import {DefaultButton, DefaultButtonProps} from "../../shared/ui/DefaultButton/DefaultButton.tsx";

interface LoginInputEmailProps {
    onNextStep: () => void;
}

const LoginInputEmail: React.FC<LoginInputEmailProps> = ({ onNextStep }) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const handleNextButtonClick = () => {
        if (isEmailValid(email)) {
            onNextStep();
        } else {
            setEmailError(true);
        }
    };

    const blurHandler = () => {
        setEmailError(false);
    };

    const isEmailValid = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const buttonProps: DefaultButtonProps = {
        padding: '',
        height: '43px',
        width: '90%',
        border: '',
        background: '#097138',
        children: 'Получить код',
        borderRadius: '10px',
        onClick: handleNextButtonClick,
        marginLeft: '0.5rem',
        marginTop: '0',
        color: '#fff',
        fontSize: '14px'
    };

    return (
        <LoginEmailContainer>
            <LoginEmailTitle>Введите вашу почту</LoginEmailTitle>
            {(emailError) && <LoginEmailError>Введите корректный емейл</LoginEmailError>}
            <input
                onBlur={blurHandler}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <DefaultButton {...buttonProps} />
        </LoginEmailContainer>
    );
};

export { LoginInputEmail };
