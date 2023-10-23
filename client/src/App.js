import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Login from './Components/Pages/UserAuthPages/Login';
import Register from './Components/Pages/UserAuthPages/Register';
import MoviePage from './Components/Pages/MovieDetail/MoviePageDetail/MoviePage';
import Landing from './Components/Pages/LandingPage/Landing';
import MovieForm from './Components/Pages/MovieForm/MovieForm';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/' element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/movie/new" element={<MovieForm />} />
        <Route path="/movie/update/:id" element={<MovieForm />} />
      </Route>
    </Routes>
  );
}

export default App;
