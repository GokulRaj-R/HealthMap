const handleGender = ( req , res , db ) => {
	const {disease} = req.body;
	// return res.json('new');
	const state = {
	  labels: ['Male', 'Female'],
		 datasets: [
	    {
	      label: 'Gender Distribution',
	      backgroundColor: ['rgba(81,234,234,0.6)',
	      'rgba(255,139,167,0.5)',
	      ],
	      borderColor: ['rgba(0,0,0,.5)',
	      'rgba(0,0,0,.5)',
	      ],
	      borderWidth: 0,
	      data: []
	    }
	  ]
	}

	// console.log(state);
	db('patients').count('id').where('gender','=','M').andWhere('disease','=',disease)
	.then( dt => {
	//	console.log(dt[0]);
		state.datasets[0].data.push( dt[0].count );
		if(state.datasets[0].data.length === 2)
		res.json(state);
		// console.log(state.datasets[0].data[0]);
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('id').where('gender','=','F').andWhere('disease','=',disease)
	.then( dt => {
	//	console.log(dt[0]);
		state.datasets[0].data.push( dt[0].count );
		// console.log(state.datasets[0].data[1]);
		// console.log(state.datasets[0].data);
		// console.log(state);
		if(state.datasets[0].data.length === 2)
		res.json(state);
	})
	.catch( err => res.status(400).json('failure'))
	
}
module.exports = {handleGender}
