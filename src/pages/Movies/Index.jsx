import React from 'react';
//import moviesrated from '../../data/moviesrated.json';
import { useState, useEffect } from 'react';
//import Range from '../../components/Range';
import MovieCard from '../../components/movies/MovieCard';
//import { MovieCard2 } from '../../components/MovieCard';
//import CheckBoxDropdown from '../../components/CheckBoxDropdown';
import FilterDrawer from '../../components/movies/FilterDrawer';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { URL_API } from '../../utils/CONSTANTS';


const Movies = () => {
	const [durationRange, setDurationRange] = useState(0);
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);


	useEffect(() => {
		//const url = '/src/data/moviesrated.json';
		fetch(`${URL_API}/reviews`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization: localStorage.getItem('token'),
			},
		})
			.then((res) => {
				if (!res.ok) {
					setError(true);
					throw Error;
				}

				return res.json();
			})
			.then((data) => {
				console.log(data);
				setMovies(data);
			})
			.catch((e) => {
				console.error('Ha ocurrido un error al obtener los datos: ', e);
				throw new Error('A');
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <Error />;
	}

	return (
		<main className="">
			<>
				<FilterDrawer
					durationRange={durationRange}
					setDurationRange={setDurationRange}
				/>
				<section className="flex flex-wrap gap-4 md:justify-evenly justify-center items-center">
					{movies.map(
						({
							_id: id,
							title,
							poster,
							genre,
							duration,
							date,
							director,
							rate,
							likes,
							dislikes,
							userId,
						}) => (
							<MovieCard
								key={id}
								title={title}
								poster={poster}
								genre={genre}
								duration={duration}
								date={date}
								rate={rate}
								director={director}
								likes={likes}
								dislikes={dislikes}
								userId={userId}
								useImagenDefecto={false}
							/>
						)
					)}
				</section>
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
