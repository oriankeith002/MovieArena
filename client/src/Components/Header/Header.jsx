import './Header.css';
import Nav from './Nav';
import Logo from './Logo';
import NavMenu from './NavMenu';
import UserProfDetail from './UserProfDetail';
import LogoImage from '../assets/headerAssets/disneyWhite.svg';
import HomeIcon from '../assets/headerAssets/homeIcon.svg';
import MoviesIcon from '../assets/headerAssets/movieIcon.svg';
import SearchIcon from '../assets/headerAssets/searchIcon.svg';
import ProfileImg from '../assets/profile.jpg';
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (<header>
                <Nav>
                    <Logo src={LogoImage} />
                    <NavMenu>
                        <Link to={'/'}>
                            <img src={HomeIcon} alt="home-icon" />
                            <span>HOME</span>
                        </Link>
                        <a href='x'>
                            <img src={SearchIcon} alt="search-icon" />
                            <span>SEARCH</span>
                        </a>
                        <a href='x'>
                            <img src={MoviesIcon} alt="movies-icon" />
                            <span>MOVIES</span>
                        </a>
                    </NavMenu>
                    <UserProfDetail src={ProfileImg} />

                </Nav>
            </header>
    )

}

export default Header; 


