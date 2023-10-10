import { useParams } from 'react-router-dom';
import FormMovie from '../../components/FormMovie';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EditInfoMovie = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState({});

	const onSubmit = (...data) => {
		console.log(data);
	};

	useEffect(() => {
		const url = '/src/data/moviesrated.json';
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					return;
				}

				return res.json();
			})
			.then((data) => {
				setMovie(data.filter((m) => m.id === id));
			})
			.catch((e) => {
				console.error('Ha ocurrido un error al obtener los datos: ', e);
			})
			.finally(() => {});
	}, []);

	return (
		<main>
			<section className="text-center  text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center flex-col items-center gap-2 my-2">
				<Link to={'/sf/mymovies'}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-arrow-left"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						strokeWidth="2"
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M5 12l14 0"></path>
						<path d="M5 12l6 6"></path>
						<path d="M5 12l6 -6"></path>
					</svg>
				</Link>
				<h1>Reseña id: {id}</h1>
			</section>
			<section className="max-w-2xl mx-auto">
				<FormMovie
					isEditing={true}
					reviewToEdit={movie[0]}
					onSubmit={onSubmit}
				/>
			</section>
		</main>
	);
};

export default EditInfoMovie;
