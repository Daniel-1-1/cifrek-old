import React, { useState } from 'react';
import {LoginStart} from "../../widgets/LoginStart/LoginStart.tsx";
import {LoginInputEmail} from "../../widgets/LoginInputEmail/LoginInputEmail.tsx";
import {LoginInputCode} from "../../widgets/LoginInputCode/LoginInputCode.tsx";

const LoginPage: React.FC = () => {
    // Состояние для отслеживания текущего шага входа
    const [loginStep, setLoginStep] = useState<'start' | 'inputEmail' | 'inputCode'>('start');

    // Функции для изменения текущего шага входа
    const goToInputEmail = () => setLoginStep('inputEmail');
    const goToInputCode = () => setLoginStep('inputCode');

    return (
        <div>
            {loginStep === 'start' && <LoginStart onNextStep={goToInputEmail} />}
            {loginStep === 'inputEmail' && <LoginInputEmail onNextStep={goToInputCode} />}
            {loginStep === 'inputCode' && <LoginInputCode />}
        </div>
    );
};

export default LoginPage;

