import { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard';
//import moviesscored from '../../data/moviesscored.json';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const MyMovies = () => {
	const [myMovies, setMyMovies] = useState([]);
	const [loadingState, setLoadingState] = useState('loading');

	useEffect(() => {
		const url = '/src/data/moviesrated.json';
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					return
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

	const onSubmit = (...data) => {
		console.log(data);
	};

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

			<section className="flex justify-center items-center flex-wrap">
				{myMovies
					.filter(({ userId }) => userId === 'user123')
					.map(
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
								id={id}
								title={title}
								poster={poster}
								genre={genre}
								duration={duration}
								year={year}
								score={score}
								likes={likes}
								dislikes={dislikes}
								userId={userId}
								isEditing={true}
								imgUrl={imgUrl}
							/>
						)
					)}
			</section>
		</main>
	);
};

export default MyMovies;
