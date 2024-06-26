import React, { useState } from 'react';
import App from './App';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Storage } from '@ionic/storage';


import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
import Welcome from './routes/Welcome';
import PageContent from './routes/PageContent';


const storage = new Storage();
await storage.create();

const RouterEntry = () => {

	const [authUser, setAuthUser] = useState({});
	const [user, setUser] = useState({});


	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/" element={<Welcome />} />
					<Route path="/Login" element={<Login setAuthUser={setAuthUser}/>} />
					<Route path="/app/dashboard" element={<Dashboard authUser={authUser} user={user} setUser={setUser}/>} />
					<Route path="/app/day/:dayId" element={<PageContent user={user} storage={storage} />} />
					<Route
						path="*"
						element={
							<main style={{ padding: '1rem' }}>
								<p>There's nothing here!</p>
								<Link to="/">Back home!</Link>
							</main>
						}
					/>
				</Route>
			</Routes>
			</BrowserRouter>
	)
}

export default RouterEntry;
