import {Link , useLocation } from "react-router-dom";
import './AccountPageNavigation.css';
import NavMenu from '../../Header/NavMenu';
import userNavIcon from '../../assets/headerAssets/userNavIcon.svg';
import userMoviesIcon from '../../assets/headerAssets/userMoviesIcon.svg';


const AccountPageNavigation = () => {

  const {pathname} = useLocation();

	let subpage = pathname.split('/')?.[2]

	if (subpage === undefined) {
		subpage = "profile";
	}
	
	function linkClasses(type=null) {
		let classes = '.default-account-nav-class' 

		if (type === subpage) {
			classes += ' active-class';
		} else {
			classes += ' inactive-class';
		}

		return classes;
	}

  return (
		<div className="ac-nav">
			<div className="ac-menu">
				<Link className={linkClasses('profile')} to={'/account'}>
					<img src={userNavIcon} alt="user-profile-icon" />
					My Profile
				</Link>
				<Link className={linkClasses('movies')} to={'/account/movies'}>
					<img src={userMoviesIcon} alt="user-movies-icons" />
					My Movies
				</Link>
			</div>
		</div>
	)
}

export default AccountPageNavigation