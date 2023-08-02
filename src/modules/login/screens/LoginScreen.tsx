import axios from 'axios';
import { useState } from 'react';

import Button from '../../../shared/button/button';
import SVGLogo from '../../../shared/icons/SVGLogo';
import Input from '../../../shared/input/input';
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, TitleLogin } from '../styles/LoginScreen.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    await axios({
      method: 'post',
      url: 'http://localhost:8080/auth',
      data: {
        email: email,
        password: password,
      },
    })
      .then((response) => {
        console.log('response', response);
        alert(`Login efetuado com sucesso! ${response.data.accessToken}`);
        return response.data;
      })
      .catch((error) => {
        console.log('error', error);
        alert('Erro ao efetuar login!');
      });
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
