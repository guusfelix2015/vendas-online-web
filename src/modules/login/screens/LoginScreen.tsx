import { useState } from 'react';

import Button from '../../../shared/button/button';
import Input from '../../../shared/input/input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/LoginScreen.styles';

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    alert(`${userName} ,${password}`);
  };

  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin type="secondary" level={2}>
            Login
          </TitleLogin>
          <Input margin="32px 0px 0px" title="USUÁRIO" onChange={handleUsername} value={userName} />
          <Input margin="32px 0px 0px" type="password" title="SENHA" onChange={handlePassword} value={password} />
          <Button margin="64px 0 16px 0" type="primary" onClick={handleLogin}>
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
