import { useState } from 'react';
import Range from './Range';
import DropDown from './Dropdown';
import Search from './Search';

const FilterDrawer = ({ durationRange, setDurationRange }) => {
	const [openDrawer, setOpenDrawer] = useState(false);
	const genres = [
		'Todos',
		'Drama',
		'Acción',
		'Ciencia ficción',
		'Crimen',
		'Historia',
		'Autobiografía',
		'Aventura',
		'Romance',
		'Sin genero',
	];

	const handleOpenDrawer = () => setOpenDrawer(!openDrawer);

	return (
		<main className=" fixed bottom-2 right-2">
			<section class="text-center">
				{/* boton flotante */}
				<button
					class=" text-white rounded-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
					type="button"
					data-drawer-target="drawer-example"
					data-drawer-show="drawer-example"
					aria-controls="drawer-example"
					onClick={handleOpenDrawer}
				>
					Filtros
				</button>
			</section>

			{/* drawer */}
			<section
				id="drawer-example"
				class={`${
					openDrawer ? 'fixed' : 'hidden'
				} top-16 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform  bg-white w-80 dark:bg-gray-800`}
				tabindex="-1"
				aria-labelledby="drawer-label"
			>
				{/* header drawer */}
				<header>
					<h5
						id="drawer-label"
						class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
					>
						<svg
							class="w-4 h-4 mr-2.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
						</svg>
						Filtrar por:
					</h5>
					<button
						type="button"
						data-drawer-hide="drawer-example"
						aria-controls="drawer-example"
						class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
						onClick={() => setOpenDrawer(false)}
					>
						<svg
							class="w-3 h-3"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 14"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
							/>
						</svg>
						<span class="sr-only">Close menu</span>
					</button>
				</header>
				{/* Filtros */}
				<section>
					<Range
						title="Duración"
						min={'60'}
						max={'240'}
						valueSelected={durationRange}
						setValueSelected={setDurationRange}
					/>
					<DropDown
						label="Generos:"
						name="genre"
						defaultValue=""
						required={true}
						options={genres}
						hidden={false}
					/>
				</section>

				{/* Confirmar filtros btn */}
				{/* <section class="flex justify-center mt-5">
					<button
						onClick={() => setOpenDrawer(false)}
						class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
					>
						Filtrar{' '}
						<svg
							class="w-3.5 h-3.5 ml-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</button>
				</section> */}

				<section className="mt-10">
					<h5
						id="drawer-label"
						class="inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
					>
						<svg
							class="w-4 h-4 mr-2.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
						</svg>
						Buscar:
					</h5>

					<Search btnText={'Buscar'} placeholder={'Harry Potter...'} />
				</section>
			</section>
		</main>
	);
};

export default FilterDrawer;
