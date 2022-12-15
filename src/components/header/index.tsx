import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../Constants';
import Button from '../button';
import StyledHeader from './style';

const Header = () => {
  const navigate = useNavigate();

  const date = new Date(Date.now());

  const fullDate = `Today: ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;

  const createPostBtnClick = () => {
    navigate(ROUTES.CREATE_POST);
  };

  return (
    <StyledHeader>
      <p>{fullDate}</p>
      <h1>Your Blog</h1>
      <Button onclick={() => createPostBtnClick()} text="Create post" />
    </StyledHeader>
  );
};

export default Header;
