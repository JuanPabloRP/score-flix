import { useState, useEffect } from 'react';
import MovieCard from '../../components/movies/MovieCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { URL_API } from '../../utils/CONSTANTS';
import { useUserContext } from '../../context/userContext';

const MyMovies = () => {
	const [myReviews, setMyReviews] = useState([]);
	const [loadingState, setLoadingState] = useState('loading');

	const { userData } = useUserContext();

	useEffect(() => {
		const fetchMyReviews = async () => {
			console.log('userData: ', userData);
			if (!userData.userId) {
				return;
			}

			try {
				const res = await fetch(`${URL_API}/reviews/${userData.userId}`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						authorization: localStorage.getItem('token'),
					},
				});

				if (!res.ok) {
					const eee = await res.json();
					console.error(eee);
					throw new Error(eee);
				}

				const data = await res.json();
				console.log(data);
				setMyReviews(data);
				setLoadingState('loaded');
			} catch (e) {
				console.log(e);
				setLoadingState('error');
			}
		};
		fetchMyReviews();
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
				{myReviews.length === 0 && (Error || Loading) && (
					<h2 className="text-center my-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
						Aún no has escrito ninguna reseña
					</h2>
				)}
				{myReviews.map(
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
							setMyMovies={setMyReviews}
						/>
					)
				)}
			</section>
		</main>
	);
};

export default MyMovies;
