import React, { useState } from 'react';
import {LoginStart} from "../../widgets/LoginStart/LoginStart.tsx";
import {LoginEmail} from "../../widgets/LoginInputEmail/LoginEmail.tsx";
import {LoginCode} from "../../widgets/LoginInputCode/LoginCode.tsx";

const LoginPage: React.FC = () => {
    // Состояние для отслеживания текущего шага входа
    const [loginStep, setLoginStep] = useState<'start' | 'inputEmail' | 'inputCode'>('start');

    // Функции для изменения текущего шага входа
    const goToInputEmail = () => setLoginStep('inputEmail');
    const goToInputCode = () => setLoginStep('inputCode');

    return (
        <div>
            {loginStep === 'start' && <LoginStart onNextStep={goToInputEmail} />}
            {loginStep === 'inputEmail' && <LoginEmail onNextStep={goToInputCode} />}
            {loginStep === 'inputCode' && <LoginCode />}
        </div>
    );
};

export default LoginPage;

