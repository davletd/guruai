import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterEntry from './RouterEntry';
import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<RouterEntry />
	</React.StrictMode>
);