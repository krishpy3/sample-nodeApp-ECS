const express = require('express')
const app = express()

app.get('/', (req, res) => {
	host_name = process.env.MYSQL_HOST
	    res.send(`Hello Multi Universe - ${host_name} from a Node.js app!`)
})

app.listen(3000,'0.0.0.0', () => {
	    console.log('Server is up on 3000')
})
