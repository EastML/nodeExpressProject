const express = require('express');
const app = express()

app.get('/', (req, res) => {
	console.log("homepage");
	res.send("homepage");
})

app.get("/:date", (req, res) => {
	const input = parseInt(req.params.date)
	console.log(input);
	if(input == NaN) {
		res.send("Not a number homie")
	} else {
		res.send("It's probably a date")
	}
})

app.listen(3000, () => console.log('listening on port 3000'))