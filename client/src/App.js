import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Login from './Components/Pages/UserAuthPages/Login';
import Register from './Components/Pages/UserAuthPages/Register';
import MoviePage from './Components/Pages/MovieDetail/MoviePageDetail/MoviePage';
import Landing from './Components/Pages/LandingPage/Landing';
import MovieForm from './Components/Pages/MovieForm/MovieForm';
import { UserContextProvider } from './Components/SupportUtilities/UserContext';



axios.defaults.baseURL = 'http://localhost:4000/apiv1/';
axios.defaults.withCredentials = true

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/movies/new" element={<MovieForm />} />
          <Route path="/movies/:id" element={<MovieForm />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
