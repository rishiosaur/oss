const HelloHandler = (req, res) => {
	res.statusCode = 200

	res.json(require('../../profiles.json'))
}

export default HelloHandler
