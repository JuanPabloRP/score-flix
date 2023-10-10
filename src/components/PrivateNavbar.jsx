import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const PrivateNavbar = () => {
	const [openUserMenu, setOpenUserMenu] = useState(false);
	const [openNavMenu, setOpenNavMenu] = useState(false);

	const routes = [
		{
			id: 1,
			name: 'Inicio',
			link: '/sf/movies',
		},
		{
			id: 2,
			name: 'Publicar',
			link: '/sf/new',
		},
		{
			id: 3,
			name: 'Modificar',
			link: '/sf/mymovies',
		},
	];

	const userOptions = [
		{
			id: 1,
			name: 'Perfil',
			link: '/sf/user',
		},
		{
			id: 9,
			name: 'Cerrar sesión',
			link: '/',
		},
	];

	return (
		<nav className="sticky top-0 z-10 bg-white border-gray-200 dark:bg-gray-900">
			<section className=" flex flex-wrap items-center justify-between mx-auto p-4">
				<Link to="/sf/movies" className="flex items-center">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="h-8 mr-3"
						alt="Flowbite Logo"
					/>
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						ScoreFlix
					</span>
				</Link>
				{/* user menu */}
				<section className="flex items-center md:order-2">
					<button
						type="button"
						className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
						id="user-menu-button"
						aria-expanded="false"
						data-dropdown-toggle="user-dropdown"
						data-dropdown-placement="bottom"
						onClick={() => setOpenUserMenu(!openUserMenu)}
					>
						<span className="sr-only">Open user menu</span>
						<img
							className="w-8 h-8 rounded-full"
							src="/docs/images/people/profile-picture-3.jpg"
							alt="user photo"
						/>
					</button>
					<section
						className={` ${
							openUserMenu ? 'block' : 'hidden'
						} z-50 absolute top-10 right-2 my-4 text-base list-none bg-white sectionide-y sectionide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:sectionide-gray-600`}
						id="user-dropdown"
					>
						<section className="px-4 py-3">
							<span className="block text-sm text-gray-900 dark:text-white">
								Nombre usuario
							</span>
							<span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
								user@epic.dou
							</span>
						</section>
						<ul className="py-2" aria-labelledby="user-menu-button">
							{userOptions.map(({ id, name, link }) => (
								<li key={id}>
									<Link
										to={link}
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
									>
										{name}
									</Link>
								</li>
							))}
						</ul>
					</section>

					{/* navbar menu */}
					<button
						data-collapse-toggle="navbar-user"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-user"
						aria-expanded="false"
						onClick={() => setOpenNavMenu(!openNavMenu)}
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
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
				</section>
				<section
					className={`items-center justify-between ${
						openNavMenu ? 'block' : 'hidden'
					} w-full md:flex md:w-auto md:order-1`}
					id="navbar-user"
				>
					<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						{routes.map(({ id, name, link }) => (
							<li key={id}>
								<NavLink
									to={link}
									className={({ isActive }) =>
										isActive
											? ' block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
											: 'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
									}
									aria-current="page"
								>
									{name}
								</NavLink>
							</li>
						))}
					</ul>
				</section>
			</section>
		</nav>
	);
};

export default PrivateNavbar;
