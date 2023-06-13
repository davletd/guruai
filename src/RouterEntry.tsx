import React, { useState } from 'react';
import App from './App';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
import Welcome from './routes/Welcome';

const RouterEntry = () => {

	const [user, setUser] = useState({});

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/" element={<Welcome />} />
					<Route path="/Login" element={<Login setUser={setUser}/>} />
					<Route path="/app/dashboard" element={<Dashboard user={user} />} />
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
