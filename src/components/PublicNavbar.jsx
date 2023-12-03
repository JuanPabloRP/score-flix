import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
import { useUserContext } from '../context/userContext';

const PublicNavbar = () => {
	const [open, setOpen] = useState(false);

	const { authToken } = useAuthContext();
	const { isLogged, setIsLogged } = useUserContext();

	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem('token');
		setIsLogged(false);
		navigate('/');
	};

	useEffect(() => {
		if (
			authToken &&
			authToken !== '' &&
			authToken !== 'undefined' &&
			authToken !== null
		) {
			setIsLogged(true);
		} else {
			setIsLogged(false);
		}
	}, [authToken, setIsLogged]);

	return (
		<nav className="sticky top-0 bg-white border-gray-200 dark:bg-gray-900">
			<section className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Link to="/" className="flex items-center">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="h-8 mr-3"
						alt="Flowbite Logo"
					/>
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						ScoreFlix
					</span>
				</Link>
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-default"
					aria-expanded="false"
					onClick={() => setOpen(!open)}
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<section
					className={`${open ? 'block' : 'hidden'} w-full md:block md:w-auto`}
					id="navbar-default"
				>
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						{isLogged && authToken ? (
							<>
								<li>
									<Link
										to="/sf/movies"
										className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
									>
										Ir al inicio
									</Link>
								</li>
								<li>
									<button
										onClick={() => handleLogout()}
										className="block py-2 pl-3 pr-4 text-red-500 rounded hover:bg-white-200 md:hover:bg-transparent md:border-0 md:hover:text-red-800 md:p-0 dark:text-red md:dark:hover:text-red-500 dark:hover:bg-white-700 dark:hover:text-red md:dark:hover:bg-transparent"
									>
										Cerrar sesión
									</button>
								</li>
							</>
						) : (
							<>
								<li>
									<Link
										to="/auth/signin"
										className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
									>
										Iniciar sesión
									</Link>
								</li>
								<li>
									<Link
										to="/auth/signup"
										className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
									>
										Registrarse
									</Link>
								</li>
							</>
						)}
					</ul>
				</section>
			</section>
		</nav>
	);
};

export default PublicNavbar;
