import ImageValidation from '../shared/ImageValidation';
import { useState, useEffect } from 'react';
import { genresArray } from '../../utils/CONSTANTS';
import useFormData from '../../hooks/useFormData';
import { toast } from 'react-toastify';

const FormMovie = ({ isEditing, reviewToEdit, onSubmit }) => {
	const [imageUrl, setImageUrl] = useState('');
	const [isValidImage, setIsValidImage] = useState(false);
	//const [genres, setGenres] = useState(genresArray);
	const [genresSelected, setGenresSelected] = useState([]);
	//const [checkedGenres, setCheckedGenres] = useState(Array(genres.length).fill(false));
	const { form, formData, updateFormData, setFormData, setFormDataFields } =
		useFormData();

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: { ...value },
		}));
	};

	const handleGenreChange = (e, genreIndex) => {
		// agregar a selectedGenre desde genres cuando le doy clic a un genero
		const { target } = e;
		const { value, checked } = target;

		const updateSelectedGenres = [...genresSelected];

		genresArray.forEach((g) => {
			if (g === value) {
				if (updateSelectedGenres.includes(g)) {
					updateSelectedGenres.splice(updateSelectedGenres.indexOf(g), 1);
				} else {
					updateSelectedGenres.push(g);
				}
			}
		});

		setGenresSelected(updateSelectedGenres);

		console.log({ genresSelected });

		/*
		setFormData((prevFormData) => ({
			...prevFormData,
			genres: updateCheckedGenres,
		}));
*/
		//handleChange(e);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const durationString = formData.duration.toString();
		const rateString = formData.rate.toString();

		const ID_review = reviewToEdit?._id;

		const formDataToSubmit = {
			title: formData.title || '',
			rate: rateString || 0,
			duration: durationString || 0,
			genre: genresSelected,
			poster: formData.poster || '',
			date: formData.date || '',
			likes: reviewToEdit?.likes || 0,
			dislikes: reviewToEdit?.dislikes || 0,
		};

		//verificar que todos los campos esten llenos
		console.log(formData);
		if (
			!formDataToSubmit.title ||
			!formDataToSubmit.rate ||
			!formDataToSubmit.duration ||
			!formDataToSubmit.poster ||
			!formDataToSubmit.date
		) {
			toast.error('Debes llenar todos los campos');
			return;
		}

		if (!isValidImage) {
			toast.error('La imagen no es valida');
			return;
		}

		if (formDataToSubmit.genre.length === 0) {
			toast.error('Debes elegir al menos un genero');
			return;
		}

		if (isEditing) {
			console.log({ formData });
			onSubmit(ID_review, formDataToSubmit);
		} else {
			onSubmit(formDataToSubmit);
		}
	};

	useEffect(() => {
		if (reviewToEdit) {
			console.log(reviewToEdit);
			setFormData({
				title: reviewToEdit.title || '',
				rate: reviewToEdit.rate || 0,
				duration: reviewToEdit.duration || 0,
				genre: reviewToEdit.genre || [],
				poster: reviewToEdit.poster || '',
				date: reviewToEdit.date || '',
				likes: reviewToEdit.likes || 0,
				dislikes: reviewToEdit.dislikes || 0,
			});

			setImageUrl(reviewToEdit.poster || '');
			setIsValidImage(true);

			setGenresSelected(reviewToEdit.genre || []);
		}
	}, [reviewToEdit]);

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
						htmlFor="title"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Titulo película
					</label>
				</section>

				<section className="relative z-0 w-full mb-6 group">
					<input
						type="number"
						name="rate"
						id="rate"
						onChange={handleChange}
						value={formData.rate}
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						min={0}
						max={10}
						step={0.01}
						pattern={'[0-9]*[.][0-9]*'}
					/>
					<label
						htmlFor="rate"
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
						htmlFor="duration"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Duración (min)
					</label>
				</section>
				<section className="relative z-0 w-full mb-6 group">
					<input
						type="date"
						name="date"
						id="date"
						onChange={handleChange}
						value={formData.date}
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						min={'1900-01-01'}
						max={'2024-12-31'}
					/>
					<label
						htmlFor="date"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Fecha de estreno
					</label>
				</section>
			</section>

			<section className="relative z-0 w-full mb-6 group">
				<ImageValidation
					poster={imageUrl}
					setImageUrl={setImageUrl}
					isValidImage={isValidImage}
					setIsValidImage={setIsValidImage}
					onChange={handleChange}
					value={formData.poster}
				/>
			</section>

			<section className="relative z-0 w-full mb-6 group">
				<section>
					<h3 className="mb-5 text-sm  text-gray-900 dark:text-gray-400">
						Elegir genero:
					</h3>
					<ul className="flex justify-start items-center flex-wrap w-full gap-6">
						{genresArray.map((genre, index) => (
							<li key={index}>
								<input
									type="checkbox"
									id={`${genre}-option`}
									value={genre}
									className="hidden peer"
									required=""
									checked={genresSelected.includes(genre)}
									onChange={(e) => handleGenreChange(e, index)}
								/>
								<label
									htmlFor={`${genre}-option`}
									className="text-center p-1  text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
								>
									{genre}
								</label>
							</li>
						))}
					</ul>
				</section>
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

/*
{['title', 'rate', 'duration', 'date'].map((inputName) => (
				<section className="relative z-0 w-full mb-6 group" key={inputName}>
					<input
						type={inputName === 'rate' ? 'number' : 'text'}
						name={inputName}
						id={inputName}
						onChange={handleChange}
						value={formData[inputName]}
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required={inputName === 'title'}
						{...(inputName === 'rate' && {
							min: 0,
							max: 10,
							step: 0.01,
							pattern: '[0-9]*[.][0-9]*',
						})}
						{...(inputName === 'duration' && { min: 0, max: 1000 })}
						{...(inputName === 'date' && {
							min: '1900-01-01',
							max: '2024-12-31',
						})}
					/>
					<label
						htmlFor={inputName}
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						{inputName === 'rate'
							? 'Puntuación (Ej: 9.4)'
							: inputName === 'duration'
							? 'Duración (min)'
							: 'Fecha de estreno'}
					</label>
				</section>
			))}
 */
