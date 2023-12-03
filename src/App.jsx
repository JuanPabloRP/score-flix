import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContext } from './context/userContext';
import { AuthContext } from './context/authContext';
import Index from './pages/Index';
import AuthLayout from './layouts/AuthLayout';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import PrivateLayout from './layouts/PrivateLayout';
import Movies from './pages/Movies/Index';
import NewMovie from './pages/Movies/NewMovie';
import MyMovies from './pages/Movies/MyMovies';
import NoMatch from './pages/NoMatch';
import EditInfoMovie from './pages/Movies/EditInfoMovie';
import { URL_API } from './utils/CONSTANTS';

function App() {
	const [userData, setUserData] = useState({});
	const [authToken, setAuthToken] = useState('');
	const [isLogged, setIsLogged] = useState(false);

	const setToken = (token) => {
		setAuthToken(token);
		if (token) {
			setIsLogged(true);
			localStorage.setItem('token', `Bearer ${token}`);
		} else {
			setIsLogged(false);
			localStorage.removeItem('token');
		}
	};

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token && (token !== '') & (token !== 'undefined') && token !== null) {
			setAuthToken(token);
			setIsLogged(true);
		}
	}, []);

	// obtener info del usuario
	useEffect(() => {
		const fetchUser = async () => {
			if (!authToken) {
				return;
			}

			try {
				const res = await fetch(`${URL_API}/users/me`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						authorization: localStorage.getItem('token'),
					},
				});

				const data = await res.json();
				setUserData(data);

				console.log(data);
			} catch (e) {
				console.log(e);
			}
		};

		fetchUser();
	}, [authToken]);

	console.log({ authToken, localStorage: localStorage.getItem('token') });

	return (
		<>
			<AuthContext.Provider value={{ authToken, setAuthToken, setToken }}>
				<UserContext.Provider
					value={{ userData, setUserData, isLogged, setIsLogged }}
				>
					<Router>
						<Routes>
							<Route path="/sf" element={<PrivateLayout />}>
								<Route path="mymovies" element={<MyMovies />} />
								<Route path="mymovies/:id" element={<EditInfoMovie />} />
								<Route path="new" element={<NewMovie />} />
								<Route path="movies" element={<Movies />} />
							</Route>
							<Route path="/auth" element={<AuthLayout />}>
								<Route path="signin" element={<SignIn />} />
								<Route path="signup" element={<SignUp />} />
							</Route>
							<Route path="/" element={<Index />} />
							<Route path="*" element={<NoMatch />} />
						</Routes>
					</Router>
				</UserContext.Provider>
			</AuthContext.Provider>
		</>
	);
}

export default App;
