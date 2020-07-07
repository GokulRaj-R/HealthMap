const handleSignin = ( req , res , db ) => {
	const {email,password} = req.body;
	db.select('*').from('users').where('email' , '=' , email)
	.then( data => {
		const isValid = ( data[0].password === password );
		if( isValid )
			res.json(true);
		else
			res.status(400).json(false);
	})
	.catch(err => res.status(400).json(false))
}

module.exports = {handleSignin}
