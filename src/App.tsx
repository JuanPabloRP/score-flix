import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import AuthLayout from './layouts/AuthLayout';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import PrivateLayout from './layouts/PrivateLayout';
import Movies from './pages/Movies/Index';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/movies" element={<PrivateLayout />}>
						<Route path="" element={<Movies />} />
					</Route>
					<Route path="/auth" element={<AuthLayout />}>
						<Route path="signin" element={<SignIn />} />
						<Route path="signup" element={<SignUp />} />
					</Route>
					<Route path="/" element={<Index />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
