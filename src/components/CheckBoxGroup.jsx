import { useState } from 'react';
import { GENRES } from '../utils/CONSTANTS';

const CheckBoxGroup = (genres) => {
	const [selectedGenres, setSelectedGenres] = useState(genres || []);

	const handleGenres = (genre) => {};

	return (
		<section>
			<h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">
				Elegir genero:
			</h3>
			<ul class="flex justify-start items-center flex-wrap w-full gap-6">
				{Object.entries(GENRES).map(([key, genre]) => (
					<li>
						<input
							type="checkbox"
							id={`${genre}-option`}
							value={genre}
							class="hidden peer"
							required=""
							onChange={() => handleGenres(genre)}
						/>
						<label
							for={`${genre}-option`}
							class="text-center p-1  text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
						>
							{genre}
						</label>
					</li>
				))}
			</ul>
		</section>
	);
};

export default CheckBoxGroup;
