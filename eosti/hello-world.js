var chars = ['d', 'e', 'h', 'l', 'o', 'r', 'w', ' ']
var order = [3, 2, 4, 4, 5, 8, 7, 5, 6, 4, 1]
var buf = new String()

order.forEach(function (value) {
	buf += chars[value - 1]
})

// Obviously the best and most efficient way to do this

console.log(buf)
