import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import Landing from './Components/Pages/Landing';
import Layout from './Components/Layout/Layout';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import MoviePage from './Components/Pages/MoviePage';


axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Route>
    </Routes>
  );
}

export default App;
