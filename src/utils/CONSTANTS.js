/* const GENRES = [
	'Drama',
	'Acción',
	'Ciencia ficción',
	'Crimen',
	'Historia',
	'Autobiografía',
	'Aventura',
	'Romance',
];
 */

const GENRES = [
	{
		genre: 'Drama',
		isSelected: false,
	},
	{
		genre: 'Acción',
		isSelected: false,
	},
	{
		genre: 'Ciencia ficción',
		isSelected: false,
	},
	{
		genre: 'Crimen',
		isSelected: false,
	},
	{
		genre: 'Historia',
		isSelected: false,
	},
	{
		genre: 'Autobiografía',
		isSelected: false,
	},
	{
		genre: 'Aventura',
		isSelected: false,
	},
	{
		genre: 'Romance',
		isSelected: false,
	},
	{
		genre: 'Comedia',
		isSelected: false,
	}
];

//genres ahora es un array
const genresArray = GENRES.map((genre) => genre.genre);

export { GENRES, genresArray };
