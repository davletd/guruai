import {
	IonButton,
	IonCard,
	IonCardContent,
	IonIcon,
	IonInput,
	IonItem,
	IonLabel,
	useIonAlert,
	useIonLoading
} from '@ionic/react';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'ionicons/icons';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';

function Login() {
	const navigate = useNavigate();
	const [alert] = useIonAlert();
	const [present, dismiss] = useIonLoading();

	const createUserWithEmailAndPassword = async () => {
		const result = await FirebaseAuthentication.createUserWithEmailAndPassword({
			email: 'mail@exmaple.com',
			password: '123456',
		});
		console.log("result: ", result);
		return result.user;
	};

	const signInWithEmailAndPassword = async () => {
		const result = await FirebaseAuthentication.signInWithEmailAndPassword({
			email: 'mail@exmaple.com',
			password: '123456',
		});
		console.log("result: ", result);
		return result.user;
	};

	const onSubmit = async (event: any) => {
		event.preventDefault();
		signInWithEmailAndPassword();
		//createUserWithEmailAndPassword();
		// await present({ message: 'Loading...' });

		// setTimeout(() => {
		// 	dismiss();
		// 	if (Math.random() < 0.5) {
		// 		alert({
		// 			header: 'Invalid credentials',
		// 			message: 'There is no user with that name and password.',
		// 			buttons: [{ text: 'Ok' }]
		// 		});
		// 	} else {
		// 		navigate('/app/dashboard');
		// 	}
		// }, 1500);
	};

	return (
		<>
			<IonCard>
				<IonCardContent>
					<form onSubmit={onSubmit}>
						<IonItem>
							<IonLabel position="floating">Email</IonLabel>
							<IonInput type="email"></IonInput>
						</IonItem>

						<IonItem>
							<IonLabel position="floating">Password</IonLabel>
							<IonInput type="password"></IonInput>
						</IonItem>

						<div className="ion-margin-top">
							<IonButton expand="full" type="submit" color="secondary">
								<IonIcon icon={logIn} slot="start" />
								Login
							</IonButton>
						</div>
					</form>
				</IonCardContent>
			</IonCard>
		</>
	);
}

export default Login;