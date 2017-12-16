const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(__dirname+ '/public'))

app.get("/", (req, res) => {
	res.render('index')
})

app.get("/:date", (req, res) => {
	const time = {
		unix: "", 
		natural: ""
	}

	const date = new Date(req.params.date * 1000)
	const options = {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	}

	if (date == "Invalid Date") {
		const strDate = req.params.date.replace("%20", " ")
		const unixDate = Date.parse(strDate)

		if (isNaN(unixDate)) {
			time.natural = null
			time.unix = unixDate

			return res.send(JSON.stringify(time) + "\nNo date for you ;( Forever alone")
		}
		
		time.natural = strDate
		time.unix = unixDate
	} else {
		time.natural = date.toLocaleString("en-US", options)
		time.unix = req.params.date
	}
	res.json(time)
})

app.listen(3000, () => console.log('listening on port 3000'))