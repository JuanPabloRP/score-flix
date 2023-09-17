import { useState } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<nav className="bg-white border-gray-200 dark:bg-gray-900">
				<section className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<a href="" className="flex items-center">
						<img
							src="https://flowbite.com/docs/images/logo.svg"
							className="h-8 mr-3"
							alt="Flowbite Logo"
						/>
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							ScoreFlix
						</span>
					</a>
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
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
					<div
						className={`${open ? 'block' : 'hidden'} w-full md:block md:w-auto`}
						id="navbar-default"
					>
						<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
						</ul>
					</div>
				</section>
			</nav>

			<main className="bg-white border-gray-200 dark:bg-gray-900">
				<header className="flex flex-col justify-center items-center min-h-screen">
					<h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
						Ingresa y enterate de las calificaciones de las mejores peliculas
					</h1>
					<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
						En <span className=" border-b border-blue-700">ScoreFlix</span> nos
						enfocamos en compartir las calificaciones de peliculas,{' '}
						<span className=" border-b border-blue-700">fácil</span> y{' '}
						<span className=" border-b border-blue-700">gratis</span>.
					</p>
					<Link
						to="/auth/signup"
						className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
					>
						Saber más
						<svg
							className="w-3.5 h-3.5 ml-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</Link>
				</header>

				<section className="flex flex-wrap justify-center items-center m-auto max-w-5xl">
					<article className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Noteworthy technology acquisitions 2021
						</h5>
						<p className="font-normal text-gray-700 dark:text-gray-400">
							Here are the biggest enterprise technology acquisitions of 2021 so
							far, in reverse chronological order.
						</p>
					</article>
				</section>

				<footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
					<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
						<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
							© 2023{' '}
							<a
								href="https://github.com/JuanPabloRP"
								className="hover:underline"
								target="_blank"
							>
								JuanPabloRP™
							</a>
							. All Rights Reserved.
						</span>
						<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
							<li>
								<a
									href="https://github.com/JuanPabloRP"
									className="mr-4 hover:underline md:mr-6"
									target="_blank"
								>
									GitHub
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/juan-pablo-rold%C3%A1n-pati%C3%B1o/"
									className="mr-4 hover:underline md:mr-6"
									target="_blank"
								>
									Linkedin
								</a>
							</li>
							<li>
								<a
									href="https://jprp-portfolio.vercel.app/"
									className="hover:underline"
									target="_blank"
								>
									Portfolio
								</a>
							</li>
						</ul>
					</div>
				</footer>
			</main>
		</>
	);
};

export default Index;
