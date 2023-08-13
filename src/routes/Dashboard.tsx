import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { IonContent, IonFooter, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/react';

import CardTile from '../components/CardTile';
import shadowContent from '../data/content';

const Dashboard = (props: any) => {
	const navigate = useNavigate();
	const { user, authUser, setUser } = props;

	const onLogout = () => {
		navigate('/');
	};

	useEffect	(() => {
		axios
		.post("http://127.0.0.1:5001/guruai-e5d66/us-central1/app/user", { userId: authUser.uid, userEmail: authUser.email })
		
		//.post("https://us-central1-guruai-core.cloudfunctions.net/app/user", { userId: user.uid, userName: user.email })
		.then((res) => {
			// Update the response state with the server's response
			setUser(res.data)
		})
		.catch((err) => {
			console.error(err);
		});
	}, [user]);

	const isCompleted = (contentDayId: number) => {
		if (!user || !user.completed_days)
			return false;
		return user.completed_days.some((completedDay: { dayId: number; }) => completedDay.dayId === contentDayId);
	}

	return (
		<IonContent>
			<h2>Dashboard</h2>
			<div>{user.userEmail}</div>
			{
				shadowContent.map(dayContent => <CardTile content={dayContent} isCompleted={isCompleted(dayContent.id)}/>)
			}
			<button onClick={onLogout}>Logout</button>
		</IonContent>
	);
}

export default Dashboard;
