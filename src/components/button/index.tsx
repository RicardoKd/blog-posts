import StyledButton from './style';

const Button = ({
  text,
  onclick = () => {},
  type = 'button',
}: {
  text: string;
  onclick?: () => void;
  type?: 'button' | 'submit';
}) => (
  <StyledButton type={type} onClick={onclick}>
    {text}
  </StyledButton>
);

export default Button;
