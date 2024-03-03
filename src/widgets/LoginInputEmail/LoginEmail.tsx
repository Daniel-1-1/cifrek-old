import React, {useState} from 'react';
import {
    LoginEmailBottom, LoginEmailButton,
    LoginEmailContainer,
    LoginEmailError, LoginEmailInput,
    LoginEmailTitle
} from "../../entities/Login/ui/LoginInputEmail/LoginEmail.styled.tsx";
import {DefaultButton, DefaultButtonProps} from "../../shared/ui/DefaultButton/DefaultButton.tsx";

interface LoginInputEmailProps {
    onNextStep: () => void;
}

const LoginEmail: React.FC<LoginInputEmailProps> = ({onNextStep}) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const handleNextButtonClick = () => {
        if (isEmailValid(email)) {
            onNextStep();
        } else {
            setEmailError(true);
        }
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
        marginTop: '20px',
        color: '#fff',
        fontSize: '14px',
        hoverBackgroundColor: '#94C6AA',
    };

    const blurHandler = () => {
        setEmailError(false);
    };

    const isEmailValid = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <LoginEmailContainer>
            <LoginEmailTitle>Введите вашу почту</LoginEmailTitle>
            {(emailError) && <LoginEmailError>Введите корректный емейл</LoginEmailError>}
            <LoginEmailInput
                onBlur={blurHandler}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <DefaultButton {...buttonProps}/>
            <LoginEmailBottom>Или</LoginEmailBottom>
            <LoginEmailButton
                type="button"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://vk.com/';
                }}
            />
        </LoginEmailContainer >
    );
};

export {LoginEmail};
