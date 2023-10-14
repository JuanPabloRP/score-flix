const validateImage = ({ imageUrl, setIsValidImage }) => {
	fetch(imageUrl)
		.then((res) => {
			if (!res.ok) {
				setIsValidImage(false);
				console.log('jmm');
				throw new Error('Error');
			}

			const contentType = res.headers.get('content-type');

			if (
				!contentType ||
				!contentType.startsWith('image') ||
				!['image/jpeg', 'image/png', 'image/gif', 'image/webp'].some((type) =>
					contentType.startsWith(type)
				)
			) {
				setIsValidImage(false);
				console.log('aa');

				throw new Error('error, no se obtuvo la img');
			}

			setIsValidImage(true);
			console.log('se obtuvo la img');
			//para tener la url de la imagen en el formdata
			//setFormDataFields(imageUrl);
			//updateFormData({ ...formData, poster: imageUrl });
		})
		.catch(() => {
			setIsValidImage(false);
			throw new Error('error, no se obtuvo la img');
		});
};

export { validateImage };
