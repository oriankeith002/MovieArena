import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Login from './Components/Pages/UserAuthPages/Login';
import Register from './Components/Pages/UserAuthPages/Register';
import MoviePage from './Components/Pages/MovieDetail/MoviePageDetail/MoviePage';
import Landing from './Components/Pages/LandingPage/Landing';
import MovieForm from './Components/Pages/MovieForm/MovieForm';
import { UserContextProvider } from './Components/SupportUtilities/UserContext';
import UserAccountPage from './Components/Pages/UserAccountPage/UserAccountPage';
import UserMoviesPage from './Components/Pages/UserAccountPage/UserMoviesPage';
import AllMoviesPage from './Components/Pages/AllMoviesPage/AllMoviesPage';

// import context here to control pages :

axios.defaults.baseURL = 'http://localhost:4000/apiv1';
axios.defaults.withCredentials = true

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/movies" element={<AllMoviesPage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/account/" element={<UserAccountPage /> } />
          <Route path="/account/movies" element={<UserMoviesPage />} />
          <Route path="/movie/new" element={<MovieForm />} />
          <Route path="/account/movie/:id" element={<MovieForm />} />

        </Route>
      </Routes>
    </UserContextProvider>

  );
}

export default App;
