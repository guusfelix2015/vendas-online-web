import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd';

import { BoxInput, TitleInput } from './input.styled';

interface InputProps extends InputPropsAntd {
  title?: string;
}

const Input = ({ title, ...props }: InputProps) => {
  return (
    <BoxInput>
      {title && <TitleInput>{title}</TitleInput>}
      <InputAntd {...props} />
    </BoxInput>
  );
};

export default Input;
