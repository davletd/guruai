import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { useNavigate } from 'react-router-dom';

const CardTile = (props: any) => {
	const { content, isCompleted } = props;
	const navigate = useNavigate();

  return (
    <IonCard onClick={() => navigate(`/app/day/${content.id}`)}>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle>{content.title}</IonCardTitle>
        <IonCardSubtitle>{content.description}</IonCardSubtitle>
				{isCompleted ? <p>done</p> : <p>locked</p>}
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
  );
}
export default CardTile;