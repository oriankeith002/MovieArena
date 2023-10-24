import { useState, useContext } from "react";
import { UserContext } from "../../SupportUtilities/UserContext";
import { Navigate } from "react-router-dom";
import axios  from "axios"; 
import './UserAccountPage.css';
import AccountPageNavigation from "./AccountPageNavigation";


const UserAccountPage = () => {

	// picking informaton from user context 
	// const {ready, user, setUser} = useContext(UserContext);
	// const [redirect, setRedirect] = useState(null);

	// // Logout Handler 
	// const logoutHandler = async() => {
	// 	await axios.post('/user/logout');
	// 	setRedirect('/');
	// 	setUser(null);
	// }


	// if user is not ready show that loading content 
	// if(!ready) {
	// 	return <div>Loading user ... </div>
	// }

	// redirect to login page if user not logged in  and no redirections to other pages
	// if (ready &&  !user && !redirect) {
	// 	return <Navigate to={'/login'} />
	// }

	// if (redirect) {
	// 	return <Navigate to={redirect} />
	// }

  return (
    <div className="ua-container">
			<AccountPageNavigation />

			<div>
				<div className="logged-in-user-info">
					<p>Name: <span className="user-name">Keith</span></p>
					<p>Email: <span className="user-name">Keith@gmail.com</span></p>
				</div>
				<button className="logout-btn">Logout</button>
			</div>
		</div>
  )
}

export default UserAccountPage