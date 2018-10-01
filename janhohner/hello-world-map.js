var letters = [' ', 'D', 'E', 'H', 'L', 'O', 'R', 'W'];
var input = '32445075641';

var output = input
	.split('')
	.map(function (val) {
		return letters[val];
	})
	.join('');

document.querySelector('span').innerText = output;