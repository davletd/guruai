/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css'; // Remove if nothing is visible
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { setupIonicReact } from '@ionic/react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { Outlet } from 'react-router-dom';
import { IonApp } from '@ionic/react';
import './App.css';

setupIonicReact();


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACsFad0okQR335_ZIPFzcCIoAoT7vKQsM",
  authDomain: "guruai-e5d66.firebaseapp.com",
  projectId: "guruai-e5d66",
  storageBucket: "guruai-e5d66.appspot.com",
  messagingSenderId: "189040479012",
  appId: "1:189040479012:web:29e8446e32828dc83d41b1",
  measurementId: "G-P4XMPSNF1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
	return (
		<IonApp style={{ paddingTop: 'env(safe-area-inset-top)' }}>
			<Outlet />
		</IonApp>
	);
}

export default App;