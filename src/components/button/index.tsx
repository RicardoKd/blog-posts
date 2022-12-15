import StyledButton from './style';

const Button = ({ text, onclick }: { text: string; onclick: () => void }) => (
  <StyledButton onClick={onclick}>{text}</StyledButton>
);

export default Button;
