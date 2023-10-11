import { toast } from 'react-toastify';

const DeleteItemModal = ({ open, setOpen, title, id, deleteMovie }) => {
	const handleClose = () => setOpen(false);

	const handleDelete = () => {
		//deleteMovie(id);
		toast.success('Pelicula eliminada');
		console.log('borrando');
		handleClose();
	};

	return (
		<article
			className={`${
				open ? 'flex' : 'hidden'
			}  shadow-gray-800  fixed top-0 left-0 right-0 max-w-md  mx-auto m-4  z-50   p-4 overflow-x-hidden flex-col mt-12 bg-white text-black border border-gray-300 rounded-lg shadow dark:text-white dark:bg-gray-800 dark:border-gray-700`}
		>
			<header className="py-2">
				<h2 className=" uppercase text-red-600 font-bold text-2xl">
					Eliminar permanentemente
				</h2>
			</header>
			<main>
				<p>¿Estás seguro que deseas eliminar: {title}?</p>
			</main>
			<footer className="flex justify-between items-center py-2">
				<button
					type="button"
					onClick={handleDelete}
					className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
				>
					Eliminar
				</button>
				<button
					type="button"
					onClick={handleClose}
					className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
				>
					Cerrar
				</button>
			</footer>
		</article>
	);
};

export default DeleteItemModal;
