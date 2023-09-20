import Footer from '../components/Footer';
import PublicNavbar from '../components/PublicNavbar';
import { Link } from 'react-router-dom';

const Index = () => {
	return (
		<>
			<PublicNavbar />

			<main className="bg-white border-gray-200 dark:bg-gray-900">
				<header className="flex flex-col justify-center items-center min-h-screen max-w-7xl text-center m-auto">
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

				<Footer />
			</main>
		</>
	);
};

export default Index;
