import React, { useState, useEffect } from 'react';
import axios from "axios";
import { IonContent, IonFooter, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';
import 'react-quill/dist/quill.bubble.css';

import shadowContent from '../data/content';

const PageContent = (props: any) => {
  const { dayId } = useParams();
  const id = parseInt(dayId || "0");
  const { user, storage } = props;
  const navigate = useNavigate();

  const [content, setContent] = useState('');

  useEffect(() => {
      async function fetchData() {
          try {
              // Fetch content from the server
              //const response = await fetch('/api/getEditorContent');
              //const serverContent = await response.text();

              const localContent = await storage.get('draftContent');
              setContent(localContent);

              // If there's content in local storage, decide which one to use
              // if (localContent && localContent !== serverContent) {
              //     // For simplicity, we prioritize local content here.
              //     // Alternatively, prompt the user to decide or compare timestamps.
              //     setContent(localContent);
              // } else {
              //     setContent(serverContent);
              // }

          } catch (error) {
              console.error('Error fetching the content:', error);
          }
      }

      fetchData();
  }, []);

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

  const saveToServer = debounce((content) => {
    axios
		  .post("http://127.0.0.1:5001/guruai-e5d66/us-central1/app/user/notes", { userId: user.userId, dayId: id, notes: content})
		
		//.post("https://us-central1-guruai-core.cloudfunctions.net/app/user", { userId: user.uid, userName: user.email })
		.then((res) => {
			// Update the response state with the server's response
			console.log(res.data)
		})
		.catch((err) => {
			console.error(err);
		});
  }, 1000);

  const onTextChange = async (newContent: any) => {
    await storage.set('draftContent', newContent);
    setContent(newContent);
    saveToServer(newContent);
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Header</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className="ion-padding">
        {shadowContent[id].text}
        <ReactQuill value={content} theme="bubble" placeholder="Content goes here..." onChange={onTextChange}/>
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