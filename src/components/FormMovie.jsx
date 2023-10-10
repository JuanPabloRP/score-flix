import CheckBoxGroup from './CheckBoxGroup';
import ImageValidation from './ImageValidation';
import { useState, useEffect } from 'react';
import { GENRES } from '../utils/CONSTANTS';
import useFormData from '../hooks/useFormData';

const FormMovie = ({ isEditing, reviewToEdit, onSubmit }) => {
	const [imageUrl, setImageUrl] = useState('');
	const [isValidImage, setIsValidImage] = useState(false);
	const [genres, setGenres] = useState(GENRES);
	const { form, formData, updateFormData, setFormDataFields, setFormData } =
		useFormData({
			duration: '',
			genres: [],
			imgUrl: '',
			score: '',
			title: '',
			year: '',
		});

	const validateImage = () => {
		fetch(imageUrl)
			.then((res) => {
				if (!res.ok) {
					setIsValidImage(false);
					return;
				}

				const contentType = res.headers.get('content-type');

				if (!contentType || !contentType.startsWith('image')) {
					setIsValidImage(false);
					console.log('error, no se obtuvo la img');
					return;
				}

				setIsValidImage(true);
				console.log('se obtuvo la img');
				//para tener la url de la imagen en el formdata
				//setFormDataFields(imageUrl);
				//updateFormData({ ...formData, imgUrl: imageUrl });
			})
			.catch(() => {
				setIsValidImage(false);
				return;
			});
	};

	const handleGenreChange = (e, genreIndex) => {
		const updateGenres = [...genres];
		updateGenres[genreIndex].isSelected = !updateGenres[genreIndex].isSelected;

		setGenres(updateGenres);
		setFormData((prevFormData) => ({
			...prevFormData,
			genres: updateGenres,
		}));
		//handleChange(e);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let selectedGenreList = genres
			.filter((genre) => genre.isSelected)
			.map((genre) => genre.genre);

		setFormDataFields({ ...formData, genres: selectedGenreList });

		if (isEditing) {
			onSubmit(reviewToEdit.id, formData);
		} else {
			onSubmit(formData);
		}
	};

	useEffect(() => {
		if (reviewToEdit) {
			console.log(reviewToEdit);
			setFormData({
				title: reviewToEdit.title || '',
				score: reviewToEdit.score || '',
				duration: reviewToEdit.duration || '',
				genres: reviewToEdit.genres || [],
				imgUrl: reviewToEdit.imgUrl || '',
				year: reviewToEdit.year || '',
			});
			console.log(formData);
		}
	}, [reviewToEdit]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log({ [name]: value });
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: { ...value },
		}));
	};

	return (
		<form onSubmit={handleSubmit} onChange={updateFormData} ref={form}>
			<section className="grid md:grid-cols-2 md:gap-6">
				<section className="relative z-0 w-full mb-6 group">
					<input
						type="text"
						name="title"
						id="title"
						onChange={handleChange}
						value={formData.title}
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
					/>
					<label
						for="title"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Titulo película
					</label>
				</section>

				<section className="relative z-0 w-full mb-6 group">
					<input
						type="number"
						name="score"
						id="score"
						onChange={handleChange}
						value={formData.score}
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						min={0}
						max={10}
						step={0.01}
						pattern={'[0-9]*[.][0-9]*'}
					/>
					<label
						for="score"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Puntuación (Ej: 9.4)
					</label>
				</section>
			</section>

			<section className="grid md:grid-cols-2 md:gap-6">
				<section className="relative z-0 w-full mb-6 group">
					<input
						type="number"
						name="duration"
						id="duration"
						value={formData.duration}
						onChange={handleChange}
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						min={0}
						max={1000}
					/>
					<label
						for="duration"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Duración (min)
					</label>
				</section>
				<section className="relative z-0 w-full mb-6 group">
					<input
						type="date"
						name="year"
						id="year"
						onChange={handleChange}
						value={formData.year}
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						min={'1900-01-01'}
						max={'2024-12-31'}
					/>
					<label
						for="year"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Fecha de estreno
					</label>
				</section>
			</section>

			<section className="relative z-0 w-full mb-6 group">
				<ImageValidation
					imageUrl={imageUrl}
					setImageUrl={setImageUrl}
					isValidImage={isValidImage}
					validateImage={validateImage}
					onChange={handleChange}
					value={formData.imgUrl}
				/>
			</section>

			<section className="relative z-0 w-full mb-6 group">
				<CheckBoxGroup
					onChange={handleChange}
					genres={genres}
					handleGenreChange={handleGenreChange}
					value={formData.genres}
				/>
			</section>

			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				onClick={(e) => handleSubmit(e)}
			>
				{isEditing ? 'Guardar' : 'Crear'}
			</button>
		</form>
	);
};

export default FormMovie;
