import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import CardTile from '../components/CardTile';
import shadowContent from '../data/content';

const Dashboard = (props: any) => {
	const navigate = useNavigate();
	const user = props.user;

	const onLogout = () => {
		navigate('/');
	};

	useEffect	(() => {
		axios
		.post("http://127.0.0.1:5001/guruai-e5d66/us-central1/app/user", { userId: user.uid, userEmail: user.email })
		
		//.post("https://us-central1-guruai-core.cloudfunctions.net/app/user", { userId: user.uid, userName: user.email })
		.then((res) => {
			// Update the response state with the server's response
			console.log(res.data)
		})
		.catch((err) => {
			console.error(err);
		});
	}, [user]);

	console.log(shadowContent);

	return (
		<>
			<h2>Dashboard</h2>
			<div>{user.email}</div>
			{
				shadowContent.map(value => <CardTile content={value}/>)
			}
			<button onClick={onLogout}>Logout</button>
		</>
	);
}

export default Dashboard;
