import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
import Welcome from './routes/Welcome';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
          <Route path="/" element={<Welcome />} />
					<Route path="" element={<Login />} />
					<Route path="/app/dashboard" element={<Dashboard />} />
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
	</React.StrictMode>
);