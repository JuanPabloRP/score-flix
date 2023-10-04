import CheckBoxGroup from './CheckBoxGroup';
import ImageValidation from './ImageValidation';
import { useState } from 'react';

const FormMovie = () => {
	const [imageUrl, setImageUrl] = useState('');
	const [isValidImage, setIsValidImage] = useState(false);

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
					return;
				}

				setIsValidImage(true);
			})
			.catch(()=>{
				setIsValidImage(false);
			});
	};

	const handleSubmit = () => {
		validateImage();
	};

	console.log(imageUrl);

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<section className="grid md:grid-cols-2 md:gap-6">
				<section className="relative z-0 w-full mb-6 group">
					<input
						type="text"
						name="floating_title"
						id="floating_title"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
					/>
					<label
						for="floating_title"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Titulo película
					</label>
				</section>
				<section className="relative z-0 w-full mb-6 group">
					<input
						type="number"
						name="floating_score"
						id="floating_score"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						min={0}
						max={10}
						step={0.01}
						pattern={'[0-9]*[.][0-9]*'}
					/>
					<label
						for="floating_score"
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
						name="floating_duration"
						id="floating_duration"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						min={0}
						max={1000}
					/>
					<label
						for="floating_duration"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Duración (min)
					</label>
				</section>
				<section className="relative z-0 w-full mb-6 group">
					<input
						type="date"
						name="floating_year"
						id="floating_year"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						min={'1900-01-01'}
						max={'2024-12-31'}
					/>
					<label
						for="floating_year"
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
				/>
			</section>

			<section className="relative z-0 w-full mb-6 group">
				<CheckBoxGroup />
			</section>

			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				onClick={(e) => handleSubmit(e)}
			>
				Submit
			</button>
		</form>
	);
};

export default FormMovie;

/* 
<section className="relative z-0 w-full mb-6 group">
					<input
						type="text"
						name="floating_genres"
						id="floating_genres"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
					/>
					<label
						for="floating_genres"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Generos (separados por comas)
					</label>
				</section>
*/
