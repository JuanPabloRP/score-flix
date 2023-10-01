import React from 'react';
import moviesrated from '../../data/moviesrated.json';
import { useState } from 'react';
import Range from '../../components/Range';
import MovieCard from '../../components/MovieCard';
import CheckBoxDropdown from '../../components/CheckBoxDropdown';

const Movies = () => {
	const [durationRange, setDurationRange] = useState(0);

	return (
		<main>
			{/* <header className="sticky top-0  bg-white dark:bg-gray-900">
				<section>
					<h1 className="mb-4 text-2xl font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-white">
						Ver calificaciones de películas
					</h1>
				</section>
				<section>
					<h2 className="font-semibold text-center text-lg md:text-xl lg:text-2xl text-gray-900 dark:text-white">
						filtrar por:{' '}
					</h2>
					<Range
						title="Duración"
						min={'60'}
						max={'240'}
						valueSelected={durationRange}
						setValueSelected={setDurationRange}
					/>

					<CheckBoxDropdown />
				</section>
			</header> */}
			<section className="flex flex-wrap gap-4 md:justify-evenly items-center">
				{moviesrated.map(
					({
						id,
						title,
						poster,
						genre,
						duration,
						year,
						rate,
						likes,
						dislikes,
						userId,
					}) => (
						<MovieCard
							key={id}
							title={title}
							poster={poster}
							genre={genre}
							duration={duration}
							year={year}
							rate={rate}
							likes={likes}
							dislikes={dislikes}
							userId={userId}
							useImagenDefecto={true}
						/>
					)
				)}
			</section>
		</main>
	);
};

export default Movies;
