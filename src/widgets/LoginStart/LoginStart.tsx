import {LoginStartButton, LoginStartText, LoginStartTitle, LoginStartContainer} from "../../entities/Login/ui/LoginStart.styled.tsx";

const LoginStart = () => {
    return (
        <LoginStartContainer>
            <LoginStartTitle>
                Войдите или зарегистрируйтесь
            </LoginStartTitle>
            <LoginStartText>
                Чтобы удобнее следить за расписанием, рейтингом внутри факультета и другими мероприятиями
            </LoginStartText>
            <LoginStartButton>
                Войти или зарегистрироваться
            </LoginStartButton>
        </LoginStartContainer>
    );
};

export default LoginStart;