let n = 9,
	vecesDivididas = 0;

for (let i = 2; i < n; i++) {
	if (n % i === 0) {
		vecesDivididas++;
		break;
	}
}

if (vecesDivididas == 0) {
	console.log('es primo');
} else {
	console.log('no es primo');
}

// -------

let n1 = 0,
	n2 = 1,
	aux = 0;

for (let i = 0; i < 10; i++) {
	console.log(n1);
	aux = n1 + n2;
	n1 = n2;
	n2 = aux;
}
