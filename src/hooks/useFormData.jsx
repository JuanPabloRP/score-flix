import { useRef, useState } from 'react';

const useFormData = (initial) => {
	const form = useRef(initial);
	const [formData, setFormData] = useState({});

	const getFormData = () => {
		const fd = new FormData(form.current);
		const obj = {};
		fd.forEach((value, key) => {
			obj[key] = value;
		});
		return obj;
	};
	const updateFormData = () => {
		setFormData(getFormData());
	};
	const resetFormData = () => {
		const emptyFormData = {};
		for (const key in formData) {
			emptyFormData[key] = '';
		}
		setFormData(emptyFormData);
	};

	const setFormDataFields = (fields, justFields) => {
		setFormData(justFields ? { ...fields } : { ...formData, ...fields });
	};
	return {
		form,
		formData,
		updateFormData,
		setFormData,
		setFormDataFields,
		resetFormData,
	};
};

export default useFormData;
