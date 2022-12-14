import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../Constants';

const Header = () => {
  const navigate = useNavigate();

  const date = new Date(Date.now());

  const fullDate = `Today: ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;

  const createPostBtnClick = () => {
    navigate(ROUTES.CREATE_POST);
  };

  return (
    <header>
      <p>{fullDate}</p>
      <h1>Your Blog</h1>
      <button type="button" onClick={() => createPostBtnClick()}>
        Create post
      </button>
    </header>
  );
};

export default Header;
