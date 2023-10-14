import FormMovie from '../../components/FormMovie';
import { URL_API } from '../../utils/CONSTANTS';
import { toast } from 'react-toastify';

const NewMovie = () => {
	const onSubmit = (data) => {
		console.log(data);
		fetch(URL_API, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error('Error al crear la reseña');
				}
				res.json();
			})
			.then((data) => {
				toast.success('Reseña creada');
				console.log(data);
			})
			.catch((err) => {
				toast.error('Error al crear la reseña');
				console.error(err);
			})
			.finally();
	};
	return (
		<main>
			<header>
				<h1 className="text-center my-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
					Crear una nueva reseña
				</h1>
			</header>
			<section className="max-w-2xl mx-auto">
				<FormMovie isEditing={false} reviewToEdit={''} onSubmit={onSubmit} />
			</section>
		</main>
	);
};

export default NewMovie;

/*

fetch('/api/movies', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error(error));
*/
