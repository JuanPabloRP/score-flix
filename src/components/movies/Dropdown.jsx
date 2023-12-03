import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

/* interface DropDownProps {
	label: string;
	name: string;
	defaultValue: string;
	required: boolean;
	options: Record<string, string>;
	hidden: boolean;
}
: FC<DropDownProps>
, FC
 */
const DropDown = ({
	label,
	name,
	defaultValue = '',
	required,
	options,
	hidden,
}) => {
	const [selectedValue, setSelectedValue] = useState(defaultValue);
	const optionsSelect = [
		['', 'Seleccione una opción', true],
		...Object.entries(options),
	];
	useEffect(() => {
		setSelectedValue(defaultValue);
	}, [defaultValue]);

	useEffect(() => {
		optionsSelect.map((o) => {});
	});

	return (
		<label
			htmlFor={name}
			className={`mb-2 text-sm font-medium bg-white text-gray-900 dark:text-white  dark:bg-gray-800 ${
				!hidden === true ? 'flex flex-col my-3' : 'hidden'
			}`}
		>
			<span className="bg-white text-gray-900 dark:text-white  dark:bg-gray-800">
				{label}
			</span>
			<select
				required={required}
				name={name}
				className="input py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  outline-none"
				value={selectedValue}
				onChange={(e) => setSelectedValue(e.target.value)}
			>
				{optionsSelect.map((o) => {
					return (
						<option
							className=""
							key={nanoid()}
							value={o[0]}
							disabled={o[2] ?? false}
						>
							{o[1]}
						</option>
					);
				})}
			</select>
		</label>
	);
};

export default DropDown;
