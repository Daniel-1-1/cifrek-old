
import React from 'react';
import {LoginStartButton, LoginStartText, LoginStartTitle, LoginStartContainer} from "../../features/Login/ui/LoginStart/LoginStart.styled.tsx";


interface LoginStartProps {
    onNextStep: () => void;
}

const LoginStart: React.FC<LoginStartProps> = ({ onNextStep }) => {
    return (
        <LoginStartContainer>
            <LoginStartTitle>
                Войдите или зарегистрируйтесь
            </LoginStartTitle>
            <LoginStartText>
                Чтобы удобнее следить за расписанием, рейтингом внутри факультета и другими мероприятиями
            </LoginStartText>
            <LoginStartButton onClick={onNextStep}>
                Войти или зарегистрироваться
            </LoginStartButton>
        </LoginStartContainer>
    );
};

export { LoginStart };
