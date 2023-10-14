import { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard';
//import moviesscored from '../../data/moviesscored.json';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { URL_API } from '../../utils/CONSTANTS';

const MyMovies = () => {
	const [myMovies, setMyMovies] = useState([]);
	const [loadingState, setLoadingState] = useState('loading');

	useEffect(() => {
		//const url = '/src/data/moviesrated.json';
		fetch(URL_API)
			.then((res) => {
				if (!res.ok) {
					throw new Error('Error obtener las reseñas');
				}

				return res.json();
			})
			.then((data) => {
				setMyMovies(data);
				setLoadingState('loaded');
			})
			.catch((e) => {
				console.error('Ha ocurrido un error al obtener los datos: ', e);
				setLoadingState('error');
			})
			.finally(() => {});
	}, []);

	

	if (loadingState === 'loading') {
		return <Loading />;
	}

	if (loadingState === 'error') {
		return <Error />;
	}

	return (
		<main>
			<h1 className="text-center my-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
				Mis reseñas
			</h1>

			<section className="flex justify-center items-center flex-wrap gap-4">
				{myMovies.map(
					({
						_id: id,
						title,
						poster,
						genre,
						duration,
						date,
						rate,
						likes,
						dislikes,
						userId,
					}) => (
						<MovieCard
							key={id}
							id={id}
							title={title}
							poster={poster}
							genre={genre}
							duration={duration}
							date={date}
							rate={rate}
							likes={likes}
							dislikes={dislikes}
							userId={userId}
							isEditing={true}
							setMyMovies={setMyMovies}
						/>
					)
				)}
			</section>
		</main>
	);
};

export default MyMovies;
