import './Header.css';
import Nav from './Nav';
import Logo from './Logo';
import NavMenu from './NavMenu';
import UserProfDetail from './UserProfDetail';
import LogoImage from '../assets/headerAssets/disneyWhite.svg';
import HomeIcon from '../assets/headerAssets/homeIcon.svg';
import MoviesIcon from '../assets/headerAssets/movieIcon.svg';
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
                        <Link to={'/movies'}>
                            <img src={MoviesIcon} alt="movies-icon" />
                            <span>MOVIES</span>
                        </Link>
                    </NavMenu>
                    <UserProfDetail src={ProfileImg} />

                </Nav>
            </header>
    )

}

export default Header; 


