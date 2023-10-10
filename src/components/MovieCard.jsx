import React from 'react';
import defectoImage from '../assets/img/defectoImage.jpg';
import { useState } from 'react';
import DeleteItemModal from './DeleteItemModal';
import { Link } from 'react-router-dom';

const MovieCard = ({
	id,
	title,
	poster,
	genre,
	duration,
	year,
	score,
	likes,
	dislikes,
	userId,
	imgUrl,
	useImagenDefecto,
	isEditing,
	deleteMovie,
}) => {
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

	const handleUpdate = () => {};

	const [open, setOpen] = useState(false);

	const handleModal = () => {
		setOpen(!open);
	};
	return (
		<section id={id} class=" max-w-sm flex flex-col md:flex-row">
			{/* Modal */}
			<DeleteItemModal
				open={open}
				setOpen={setOpen}
				title={title}
				id={id}
				deleteMovie={deleteMovie}
			/>

			{/* Botones de los lados ( like-dislike / delete-edit) */}
			<aside className="flex items-center justify-center md:flex-col md:justify-start gap-1 p-2 text-white">
				{isEditing ? (
					<EditButtons
						id={id}
						handleModal={handleModal}
						handleUpdate={handleUpdate}
					/>
				) : (
					<DefaultButtons
						handleLike={handleLike}
						liked={liked}
						disliked={disliked}
						handleDislike={handleDislike}
					/>
				)}
			</aside>

			{/* Card */}
			<section className="bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<figure className="rounded-t-lg">
					<img
						class="rounded-t-lg"
						src={useImagenDefecto ? defectoImage : imgUrl}
						alt={`${title} image`}
					/>
				</figure>

				<section class="p-5">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{title}
					</h5>

					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
						<span>Generos: {genre}</span>
						<br />
						<span>Duración: {duration} min</span>
						<br />
						<span>Año de estreno: {year}</span>
						<br />
						<span>Calificación: {score}</span>
					</p>
				</section>
			</section>
		</section>
	);
};

const DefaultButtons = ({ handleLike, liked, disliked, handleDislike }) => {
	return (
		<>
			<button
				className={`text-center flex justify-center items-center h-fit w-fit px-3 rounded-lg py-2  text-green-500  ${
					liked.selected ? ' bg-green-700 text-green-100' : null
				} `}
				onClick={(e) => handleLike(e)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-arrow-big-up-filled"
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
					<path
						d="M10.586 3l-6.586 6.586a2 2 0 0 0 -.434 2.18l.068 .145a2 2 0 0 0 1.78 1.089h2.586v7a2 2 0 0 0 2 2h4l.15 -.005a2 2 0 0 0 1.85 -1.995l-.001 -7h2.587a2 2 0 0 0 1.414 -3.414l-6.586 -6.586a2 2 0 0 0 -2.828 0z"
						strokeWidth="0"
						fill="currentColor"
					></path>
				</svg>
				{/* <span>{liked.likes}</span> */}
			</button>
			<span className="text-center">{liked.likes - disliked.dislikes}</span>
			<button
				className={`text-center flex justify-center items-center  w-fit px-3 rounded-lg py-2  text-red-500  ${
					disliked.selected ? 'bg-red-700 text-red-100 ' : null
				}`}
				onClick={(e) => handleDislike(e)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="icon icon-tabler icon-tabler-arrow-big-down-filled"
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
					<path
						d="M10 2l-.15 .005a2 2 0 0 0 -1.85 1.995v6.999l-2.586 .001a2 2 0 0 0 -1.414 3.414l6.586 6.586a2 2 0 0 0 2.828 0l6.586 -6.586a2 2 0 0 0 .434 -2.18l-.068 -.145a2 2 0 0 0 -1.78 -1.089l-2.586 -.001v-6.999a2 2 0 0 0 -2 -2h-4z"
						stroke-width="0"
						fill="currentColor"
					></path>
				</svg>
				{/* <span>{disliked.dislikes}</span> */}
			</button>
		</>
	);
};

const EditButtons = ({ id, handleModal, handleUpdate }) => {
	const handleDelete = () => {};
	return (
		<>
			<button
				className={`text-center flex justify-center items-center h-fit w-fit px-3 rounded-lg py-2  text-red-300 
				hover:text-red-700 `}
				onClick={handleModal}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-trash-x-filled"
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
					<path
						d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16zm-9.489 5.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"
						strokeWidth="0"
						fill="currentColor"
					></path>
					<path
						d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z"
						strokeWidth="0"
						fill="currentColor"
					></path>
				</svg>
				{/* <span>{liked.likes}</span> */}
			</button>
			<Link
				className={`text-center flex justify-center items-center  w-fit px-3 rounded-lg py-2  text-yellow-100 
				hover:text-yellow-400
				`}
				to={`/sf/mymovies/${id}`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-pencil-minus"
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
					<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
					<path d="M13.5 6.5l4 4"></path>
					<path d="M16 19h6"></path>
				</svg>
				{/* <span>{disliked.dislikes}</span> */}
			</Link>
		</>
	);
};

export default MovieCard;
