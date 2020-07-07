const handleSubmit = (req,res,db) => {
	const {name,
    gender,
    age,
    locality,
    bloodgroup,
    antigen1,
    antigen2,
    disease,
    symptom2,
    medicine,
    month} = req.body;

	const user = {
	name: name,
    gender: gender,
    age: age,
    locality: locality,
    bloodgroup: bloodgroup,
    antigen1: antigen1,
    antigen2: antigen2,
    disease: disease,
    symptom2: symptom2,
    medicine: medicine,
    month: month,
	};

	db.insert(user).into('patients').then( () => console.log('success'))
	.catch( err => { 
	//	return res.status(400).json('unable to submit') 
		console.log(err);
	});
	console.log(user)
}

module.exports = {handleSubmit}
