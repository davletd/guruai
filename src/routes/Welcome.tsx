import { useNavigate } from 'react-router-dom';
import {
	IonButton,
	IonContent,
	IonCard,
	IonCardContent,
	IonIcon,
	IonInput,
	IonItem,
	IonLabel,
	useIonAlert,
	useIonLoading
} from '@ionic/react';

import styles from './Welcome.module.scss';

const Welcome = () => {
	const navigate = useNavigate();

	const onLogout = () => {
		navigate('/');
	};

	return (
		<IonContent>
			<div className={styles.Body}>
				<div className={styles.Text}>
					<IonLabel>Welcome to the journey into better self</IonLabel>
				</div>
				<div className={styles.Button}>
					<IonButton>Begin</IonButton>
				</div>
			</div>
		</IonContent>
	);
}

export default Welcome;
