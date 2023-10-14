import { toast } from 'react-toastify';

const validateImage = ({ imageUrl, setIsValidImage }) => {
	fetch(imageUrl)
		.then((res) => {
			if (!res.ok) {
				setIsValidImage(false);
				throw new Error('Error');
			}

			const contentType = res.headers.get('Content-Type');

			if (!contentType || !contentType.startsWith('image')) {
				setIsValidImage(false);

				throw new Error('error, no se obtuvo la img');
			}

			setIsValidImage(true);
			console.log('se obtuvo la img');
			toast.success('Se obtuvo la img');
			//setImageUrl(imageUrl);

			//para tener la url de la imagen en el formdata
			//setFormDataFields(imageUrl);
			//updateFormData({ ...formData, poster: imageUrl });
		})
		.catch(() => {
			setIsValidImage(false);
			toast.error('Error, no se obtuvo la img');
			throw new Error('error, no se obtuvo la img');
		});
};

export { validateImage };
