import { useParams } from 'react-router-dom';
import FormMovie from '../../components/movies/FormMovie';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { URL_API } from '../../utils/CONSTANTS';
import { toast } from 'react-toastify';

const EditInfoMovie = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState({});

	const onSubmit = (id, data) => {
		console.log({ id, data });

		fetch(`${URL_API}/reviews/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id: id,
				data: data,
			}),
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error('Error al actulizar la reseña');
				}

				return res.json();
			})
			.then((data) => {
				//console.log(data);
				setMovie(data._id === id);
				//console.log(movie);
				toast.success('Se actualizó la reseña');
			})
			.catch((e) => {
				console.error('Ha ocurrido un error al actulizar la reseña: ', e);
				toast.error('Error al actulizar la reseña');
			})
			.finally(() => {});
	};

	useEffect(() => {
		fetch(URL_API)
			.then((res) => {
				if (!res.ok) {
					throw new Error('Error obtener las reseñas');
				}

				return res.json();
			})
			.then((data) => {
				setMovie(data.filter((m) => m._id === id));
			})
			.catch((e) => {
				console.error('Ha ocurrido un error al obtener los datos: ', e);
				toast.error('Error al obtener los datos');
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
