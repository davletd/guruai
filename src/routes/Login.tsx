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

const Login = (props: any) => {
	const navigate = useNavigate();
	const [alert] = useIonAlert();
	const [present, dismiss] = useIonLoading();
	const setUser = props.setUser;

	const createUserWithEmailAndPassword = async () => {
		const result = await FirebaseAuthentication.createUserWithEmailAndPassword({
			email: 'mail@exmaple.com',
			password: '123456',
		});
		console.log("result: ", result);
		setUser(result.user);
	};

	const signInWithEmailAndPassword = async () => {
		const result = await FirebaseAuthentication.signInWithEmailAndPassword({
			email: 'mail@exmaple.com',
			password: '123456',
		});
		console.log("result: ", result);
		setUser(result.user);
	};

	const onSubmit = async (event: any) => {
		event.preventDefault();
		await signInWithEmailAndPassword();
		navigate('/app/dashboard');
	};

	const signUp = async (event: any) => {
		event.preventDefault();
		await createUserWithEmailAndPassword();
		navigate('/app/dashboard');
	}

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

						<div className="ion-margin-top">
							<IonButton onClick={signUp} expand="full" color="secondary">
								<IonIcon icon={logIn} slot="start" />
								Sign up
							</IonButton>
						</div>
					</form>
				</IonCardContent>
			</IonCard>
		</>
	);
}

export default Login;