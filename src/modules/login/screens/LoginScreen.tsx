import { useState } from 'react';

import Button from '../../../shared/components/button/button';
import SVGLogo from '../../../shared/components/icons/SVGLogo';
import Input from '../../../shared/components/input/input';
import { useRequests } from '../../../shared/hooks/useRequest';
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, TitleLogin } from '../styles/LoginScreen.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { postRequest, loading } = useRequests();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    postRequest('http://localhost:8080/auth', { email, password });
  };

  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedContainer>
          <SVGLogo />
          <TitleLogin type="secondary" level={2}>
            Login
          </TitleLogin>
          <Input margin="32px 0px 0px" title="USUÁRIO" onChange={handleEmail} value={email} />
          <Input margin="32px 0px 0px" type="password" title="SENHA" onChange={handlePassword} value={password} />
          <Button loading={loading} margin="64px 0 16px 0" type="primary" onClick={handleLogin}>
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
