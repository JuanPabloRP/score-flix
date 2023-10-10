import React from 'react';
//import moviesrated from '../../data/moviesrated.json';
import { useState, useEffect } from 'react';
//import Range from '../../components/Range';
import MovieCard from '../../components/MovieCard';
//import { MovieCard2 } from '../../components/MovieCard';
//import CheckBoxDropdown from '../../components/CheckBoxDropdown';
import FilterDrawer from '../../components/FilterDrawer';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Movies = () => {
	const [durationRange, setDurationRange] = useState(0);
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const url = '/src/data/moviesrated.json';
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					setError(true);
					return new Error('A');
				}

				return res.json();
			})
			.then((data) => {
				setMovies(data);
			})
			.catch((e) => {
				console.error('Ha ocurrido un error al obtener los datos: ', e);
				return new Error('A');
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<main className="">
			<>
				{loading ? (
					<>
						<Loading />
					</>
				) : (
					<>
						{error ? (
							<Error />
						) : (
							<>
								<FilterDrawer
									durationRange={durationRange}
									setDurationRange={setDurationRange}
								/>
								<section className="flex flex-wrap gap-4 md:justify-evenly items-center">
									{movies.map(
										({
											id,
											title,
											poster,
											genre,
											duration,
											year,
											score,
											likes,
											dislikes,
											userId,
											imgUrl,
										}) => (
											<MovieCard
												key={id}
												title={title}
												poster={poster}
												genre={genre}
												duration={duration}
												year={year}
												score={score}
												likes={likes}
												dislikes={dislikes}
												userId={userId}
												imgUrl={imgUrl}
												useImagenDefecto={false}
											/>
										)
									)}
								</section>
							</>
						)}
					</>
				)}
			</>
		</main>
	);
};

export default Movies;

{
	/* <header className="sticky top-0  bg-white dark:bg-gray-900">
				<section>
					<h1 className="mb-4 text-2xl font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-white">
						Ver calificaciones de películas
					</h1>
				</section>
				<section>
					<h2 className="font-semibold text-center text-lg md:text-xl lg:text-2xl text-gray-900 dark:text-white">
						filtrar por:{' '}
					</h2>
					<Range
						title="Duración"
						min={'60'}
						max={'240'}
						valueSelected={durationRange}
						setValueSelected={setDurationRange}
					/>

					<CheckBoxDropdown />
				</section>
			</header> */
}
