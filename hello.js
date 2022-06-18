const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
	res.send(`Hello <br>
	Host: ${process.env.DATABASE_HOST},<br>
	DB: ${process.env.DATABASE_USER},<br> 
	Name: ${process.env.DATABASE_NAME},<br>
	Pwd: ${process.env.DATABASE_PASSWORD},<br>
	from a Node.js app!`)
})

app.listen(3000, '0.0.0.0', () => {
	console.log('Server is up on 3000')
})
