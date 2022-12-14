import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ROUTES } from './Constants';
import EditPost from './pages/EditPost';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.GENERAL} element={<Home />} />
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.EDIT_POST} element={<EditPost />} />
    </Routes>
  );
};

export default App;
