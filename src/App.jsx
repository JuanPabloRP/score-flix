import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
	return (
		<>
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
		</>
	);
}

export default App;
