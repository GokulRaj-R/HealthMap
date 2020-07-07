const handledList = ( req , res , db ) => {

	db.select('disease').from('patients').groupBy('disease')
	.then( data => {
		res.json(data);
	})
	.catch(err => res.status(400).json(false))

}

module.exports = {handledList}