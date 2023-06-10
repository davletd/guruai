
import { useEffect, useState } from 'react';
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

import { PushNotificationSchema, PushNotifications, Token, ActionPerformed } from '@capacitor/push-notifications';
import { Toast } from "@capacitor/toast";
import { Capacitor } from '@capacitor/core';

import styles from './Welcome.module.scss';

const Welcome = () => {
	const navigate = useNavigate();

	const onClick = () => {
		navigate('/Login');
	};

	const nullEntry: any[] = []
    const [notifications, setnotifications] = useState(nullEntry);

		// const options: GetTokenOptions = {
    //   vapidKey: "2WMN5B7ADN",
    // };

		// const getToken = async () => {
		// 	const { token } = await FirebaseMessaging.getToken(options);
		// 	return token;
		// }

    useEffect(()=>{
			const isPushNotificationsAvailable = Capacitor.isPluginAvailable('PushNotifications');
				if (!isPushNotificationsAvailable) {
					return;
				}

        PushNotifications.checkPermissions().then((res) => {
            if (res.receive !== 'granted') {
              PushNotifications.requestPermissions().then((res) => {
                if (res.receive === 'denied') {
                  showToast('Push Notification permission denied');
                }
                else {
                  showToast('Push Notification permission granted');
                  register();
                }
              });
            }
            else {
              register();
            }
          });
    },[])
    
    const register = () => {
        console.log('Initializing HomePage');

        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();

        // On success, we should be able to receive notifications
        PushNotifications.addListener('registration',
            (token: Token) => {          
								console.log('PNToken: ', token);
								// console.log("token: ", getToken());
                showToast('Push registration success');
            }
        );

        // Some issue with our setup and push will not work
        PushNotifications.addListener('registrationError',
            (error: any) => {
								console.log(error);
                alert('Error on registration: ' + JSON.stringify(error));
            }
        );

        // Show us the notification payload if the app is open on our device
        PushNotifications.addListener('pushNotificationReceived',
            (notification: PushNotificationSchema) => {
							console.log(notification);
                setnotifications(notifications => [...notifications, { id: notification.id, title: notification.title, body: notification.body, type: 'foreground' }])
            }
        );

        // Method called when tapping on a notification
        PushNotifications.addListener('pushNotificationActionPerformed',
            (notification: ActionPerformed) => {
							console.log(notification);
                setnotifications(notifications => [...notifications, { id: notification.notification.data.id, title: notification.notification.data.title, body: notification.notification.data.body, type: 'action' }])
            }
        );
    }

    const showToast = async (msg: string) => {
			const isToasAvailable = Capacitor.isPluginAvailable('isToasAvailable');
				if (!isToasAvailable) {
					return;
				}
			await Toast.show({
					text: msg
			})
		}


	return (
		<IonContent>
			<div className={styles.Body}>
				<div className={styles.Text}>
					<IonLabel>Welcome to the journey into better self</IonLabel>
				</div>
				<div className={styles.Button}>
					<IonButton onClick={onClick}>Begin</IonButton>
					<IonButton color="success" expand="full" onClick={register}>Register for Push</IonButton>
				</div>
			</div>
		</IonContent>
	);
}

export default Welcome;
