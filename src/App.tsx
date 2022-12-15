import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './Constants';
import CreatePost from './pages/createPost/CreatePost';
import EditPost from './pages/editPost/EditPost';
import Home from './pages/Home';
import ViewPost from './pages/viewPost/ViewPost';

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.GENERAL} element={<Home />} />
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.CREATE_POST} element={<CreatePost />} />
      <Route path={ROUTES.VIEW_POST} element={<ViewPost />} />
      <Route path={ROUTES.EDIT_POST} element={<EditPost />} />
    </Routes>
  );
};

export default App;
