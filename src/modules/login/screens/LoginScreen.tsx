import Input from '../../../shared/input/input';
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage } from '../styles/LoginScreen.styles';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <Input title="USUÁRIO" />
          <Input title="SENHA" />
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
