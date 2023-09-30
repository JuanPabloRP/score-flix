import React, { useState, useEffect, FC } from 'react';
import { nanoid } from 'nanoid';

interface DropDownProps {
	label: string;
	name: string;
	defaultValue: string;
	required: boolean;
	options: Record<string, string>;
	hidden: boolean;
}

const DropDown: FC<DropDownProps> = ({
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
			className={!hidden === true ? 'flex flex-col my-3' : 'hidden'}
		>
			<span>{label}</span>
			<select
				required={required}
				name={name}
				className="input"
				value={selectedValue}
				onChange={(e) => setSelectedValue(e.target.value)}
			>
				{optionsSelect.map((o) => {
					return (
						<option key={1} value={o[0]} disabled={o[2] ?? false}>
							{o[1]}
						</option>
					);
				})}
			</select>
		</label>
	);
};

//fix nanoid on key prop on option
// key={nanoid()}

export default DropDown;
