import React from 'react';
import axios from "axios";
import { IonContent, IonFooter, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useParams } from 'react-router-dom';

import shadowContent from '../data/content';

const PageContent = (props: any) => {
  const { dayId } = useParams();
  const id = parseInt(dayId || "0");
  const user = props.user;

  const onCompleteDay = async (event: any) => {
		event.preventDefault();
		axios
		  .post("http://127.0.0.1:5001/guruai-e5d66/us-central1/app/user/completed", { userId: user.userId, dayId: id})
		
		//.post("https://us-central1-guruai-core.cloudfunctions.net/app/user", { userId: user.uid, userName: user.email })
		.then((res) => {
			// Update the response state with the server's response
			console.log(res.data)
		})
		.catch((err) => {
			console.error(err);
		});
	};


  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Header</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className="ion-padding">
        {shadowContent[id].text}
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer</IonTitle>
          <IonButton expand="full" onClick={onCompleteDay} color="primary">
            Complete
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </>
  );
}
export default PageContent;