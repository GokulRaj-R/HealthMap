const handleSignup = (req,res,db) => {
	const { name , email , password } = req.body;
	const user = {
		name: name,
		email: email,
		password: password
	};
	db.insert(user).into('users').then( () => res.json('success'))
	.catch( err => { return res.status(400).json('unable to register') });
}

module.exports = {handleSignup}
