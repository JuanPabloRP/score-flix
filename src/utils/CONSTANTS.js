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
	},
];

//genres ahora es un array
const genresArray = GENRES.map((genre) => genre.genre);

//
//const URL_API = 'http://localhost:3000';
const URL_API = 'https://karratha-redback-hnae.1.us-1.fl0.io';

export { GENRES, genresArray, URL_API };
