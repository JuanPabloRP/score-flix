const ImageValidation = ({
	imageUrl,
	setImageUrl,
	isValidImage,
	validateImage,
	onChange,
	value,
}) => {
	const handleImageUrlChange = (e) => {
		onChange(e);
		setImageUrl(e.target.value);
	};

	const handleCheck = () => {
		validateImage();
	};

	return (
		<>
			<section className="flex items-center">
				<input
					type="text"
					name="imgUrl"
					id="imgUrl"
					value={value}
					className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
					onChange={(e) => handleImageUrlChange(e)}
				/>
				<label
					for="imgUrl"
					className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>
					Url imagen
				</label>
				<button
					className="rounded-full text-gray-500 dark:text-gray-400"
					onClick={handleCheck}
				>
					{!imageUrl
						? '🔃'
						: isValidImage
						? '✅'
						: '❌'}
				</button>
			</section>
			<p className="text-sm text-gray-500 dark:text-gray-400">
				{!imageUrl
					? 'Ingresa una URL de imagen y haz click en el botón para comprobar si es valida'
					: isValidImage
					? 'La imagen es valida'
					: 'Esta URL no contiene una imagen valida o no se puede acceder a esta'}
			</p>
		</>
	);
};

export default ImageValidation;
/*
{!imageUrl || (imageUrl && !isValidImage)
						? '🔃'
						: isValidImage
						? '✅'
						: '❌'}
*/

/*
	{isValidImage ? (
				<p className="text-sm text-gray-500 dark:text-gray-400">
					La imagen es valida
				</p>
			) : (
				<p className="text-sm text-gray-500 dark:text-gray-400">
					Esta URL no contiene una imagen valida o no se puede acceder a esta{' '}
				</p>
			)}
*/
