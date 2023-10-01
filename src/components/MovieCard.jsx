import React from 'react';
import defectoImage from '../assets/img/defectoImage.jpg';
import { useState } from 'react';

/*
"dislikes": 200,
    "duration": 142,
    "genre": "Drama",
    "id": "1",
    "likes": 5000,
    "poster": "shawshank_redemption.jpg",
    "rate": 9.3,
    "title": "The Shawshank Redemption",
    "userId": "user123",
    "year": "1994"
 */

const MovieCard = ({
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
	useImagenDefecto,
}) => {
	console.log(userId);

	const [liked, setLiked] = useState({
		likes: likes,
		selected: false,
	});
	const [disliked, setDisliked] = useState({
		dislikes: dislikes,
		selected: false,
	});

	const handleLike = () => {
		if (!liked.selected) {
			if (disliked.selected) {
				setDisliked({ dislikes: dislikes, selected: !disliked.selected });
			}
			setLiked({ likes: likes + 1, selected: !liked.selected });
		} else {
			setLiked({ likes: likes, selected: !liked.selected });
		}
	};

	const handleDislike = () => {
		if (!disliked.selected) {
			if (liked.selected) {
				setLiked({ likes: likes, selected: !liked.selected });
			}
			setDisliked({ dislikes: dislikes + 1, selected: !disliked.selected });
		} else {
			setDisliked({ dislikes: dislikes, selected: !disliked.selected });
		}
	};
	return (
		<section
			id={id}
			class="max-w-sm bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
		>
			<figure className="rounded-t-lg">
				<img
					class="rounded-t-lg"
					src={useImagenDefecto ? defectoImage : poster || defectoImage}
					alt={`${title} image`}
				/>
			</figure>
			<section class="p-5">
				<a href="#">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{title}
					</h5>
				</a>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
					<span>Generos: {genre}</span>
					<br />
					<span>Duración: {duration} min</span>
					<br />
					<span>Año de estreno: {year}</span>
					<br />
					<span>Calificación: {rate}</span>
				</p>
			</section>
			<footer className="flex flex-wrap md:gap-1 md:justify-around py-2">
				<button
					className={`text-center  flex justify-center items-center w-full md:w-fit md:px-5 rounded-lg py-2 bg-green-200 border-2 border-green-500 text-green-500 hover:bg-green-300 ${
						liked.selected
							? 'bg-green-400 border-2 border-green-700 text-green-700'
							: null
					} `}
					onClick={(e) => handleLike(e)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-arrow-big-up-filled"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path
							d="M10.586 3l-6.586 6.586a2 2 0 0 0 -.434 2.18l.068 .145a2 2 0 0 0 1.78 1.089h2.586v7a2 2 0 0 0 2 2h4l.15 -.005a2 2 0 0 0 1.85 -1.995l-.001 -7h2.587a2 2 0 0 0 1.414 -3.414l-6.586 -6.586a2 2 0 0 0 -2.828 0z"
							stroke-width="0"
							fill="currentColor"
						></path>
					</svg>
					<span>{liked.likes}</span>
				</button>
				<button
					className={`text-center flex justify-center items-center w-full md:w-fit md:px-5 rounded-lg py-2 bg-red-200 border border-red-500 text-red-500 hover:bg-red-300  ${
						disliked.selected
							? 'bg-red-400 border-2 border-red-700 text-red-700'
							: null
					}`}
					onClick={(e) => handleDislike(e)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-arrow-big-down-filled"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path
							d="M10 2l-.15 .005a2 2 0 0 0 -1.85 1.995v6.999l-2.586 .001a2 2 0 0 0 -1.414 3.414l6.586 6.586a2 2 0 0 0 2.828 0l6.586 -6.586a2 2 0 0 0 .434 -2.18l-.068 -.145a2 2 0 0 0 -1.78 -1.089l-2.586 -.001v-6.999a2 2 0 0 0 -2 -2h-4z"
							stroke-width="0"
							fill="currentColor"
						></path>
					</svg>
					<span>{disliked.dislikes}</span>
				</button>
			</footer>
		</section>
	);
};

export default MovieCard;
