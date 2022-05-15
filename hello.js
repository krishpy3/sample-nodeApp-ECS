const express = require('express')
const app = express()

app.get('/', (req, res) => {
	    res.send('Hello Multi Universe from a Node.js app!')
})

app.listen(3000,'0.0.0.0', () => {
	    console.log('Server is up on 3000')
})
