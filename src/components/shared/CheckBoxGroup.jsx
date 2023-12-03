//import { useState } from 'react';

const CheckBoxGroup = ({ genres, handleGenreChange, value }) => {
	/* const [selectedGenres, setSelectedGenres] = useState([{}]);
	
	const handleGenres = (e) => {
		const { checked, value } = e.target;

		const updateArray = [...genres];

		const genreToUpdate = updateArray.find((genre) => genre.genre === value);

		if (checked) {
			if (genreToUpdate) {
				genreToUpdate.isSelected = true;
				setSelectedGenres([...selectedGenres, genreToUpdate]);
			}
		} else {
			if (genreToUpdate) {
				genreToUpdate.isSelected = false;
				setSelectedGenres(
					selectedGenres.filter((genre) => genre.genre !== value)
				);
			}
		}
	}; */
	
	return (
		<section>
			<h3 class="mb-5 text-sm  text-gray-900 dark:text-gray-400">
				Elegir genero:
			</h3>
			<ul class="flex justify-start items-center flex-wrap w-full gap-6">
				{genres.map((genre, index) => (
					<li key={index}>
						<input
							type="checkbox"
							id={`${genre.genre}-option`}
							name="genre"
							value={genre.genre}
							class="hidden peer"
							required=""
							checked={genre.isSelected}
							onChange={(e) => handleGenreChange(e, index)}
						/>
						<label
							for={`${genre.genre}-option`}
							class="text-center p-1  text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
						>
							{genre.genre}
						</label>
					</li>
				))}
			</ul>
		</section>
	);
};

export default CheckBoxGroup;
/*
<CheckBoxGroup
					onChange={handleChange}
					genres={genres}
					handleGenreChange={handleGenreChange}
					value={formData.genres}
				/>
 */