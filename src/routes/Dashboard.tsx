import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Dashboard = (props: any) => {
	const navigate = useNavigate();
	const user = props.user;

	const onLogout = () => {
		navigate('/');
	};

	useEffect	(() => {
		axios
		.post("http://127.0.0.1:5001/guruai-core/us-central1/app/user", { userId: user.uid, userEmail: user.email })
		
		//.post("https://us-central1-guruai-core.cloudfunctions.net/app/user", { userId: user.uid, userName: user.email })
		.then((res) => {
			// Update the response state with the server's response
			console.log(res.data)
		})
		.catch((err) => {
			console.error(err);
		});
	}, [user]);

	return (
		<>
			<h2>Dashboard</h2>
			<div>{user.email}</div>
			<button onClick={onLogout}>Logout</button>
		</>
	);
}

export default Dashboard;
