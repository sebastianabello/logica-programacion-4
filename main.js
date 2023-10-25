function isNumber(value) {
	return typeof value === 'number' && !isNaN(value);
}

function getFibonacciSeries(n) {
	const series = [];
	let a = 0;
	let b = 1;

	for (let i = 0; i < n; i++) {
		series.push(a);
		const temp = a;
		a = b;
		b = temp + b;
	}

	return series;
}

function generarFibonacci() {
	const inputElement = document.getElementById('numeroInput');
	const resultadoElement = document.getElementById('resultado');
	const input = inputElement.value;

	if (!isNumber(Number(input))) {
		alert('Por favor, introduce un número válido.');
		return;
	}

	const n = parseInt(input);
	const fibonacciSeries = getFibonacciSeries(n);

	if (fibonacciSeries.length > 0) {
		resultadoElement.textContent = fibonacciSeries.join(', ');
	} else {
		resultadoElement.textContent = 'La serie está vacía.';
	}
}
