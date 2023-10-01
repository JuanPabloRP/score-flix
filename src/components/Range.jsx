const Range = ({ title, min, max, valueSelected, setValueSelected }) => {
	const handleChange = (e) => setValueSelected(e.target.value);
	return (
		<section className="p-3">
			<article>
				<label
					for="steps-range"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					{title}
				</label>
				<input
					id="steps-range"
					type="range"
					min={min}
					max={max}
					value={valueSelected}
					onChange={handleChange}
					step="10"
					class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 md:w-40"
				></input>
				<p className="text-gray-900 dark:text-white opacity-40 pl-1">
					{''} {valueSelected}
				</p>
			</article>
		</section>
	);
};

export default Range;
