import FormMovie from '../../components/FormMovie';

const NewMovie = () => {
	const onSubmit = (data) => {
		console.log(data);
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
