const handleAge = ( req , res , db ) => {
	const {disease} = req.body;
	// return res.json('new');
	const state = {
	  labels: ['0-20', '21-60' , '60+'],
     datasets: [
      {
        label: 'Age Groups',
        backgroundColor: [
        'rgba(25,255,255,.6)',
        'rgba(255,255,51,0.6)',
        'rgba(64,255,25,.6)',
        ],
        borderColor: [
        'rgba(0,0,0,1)',
       	'rgba(0,0,0,1)',  
        'rgba(0,0,0,1)',
        ],
        borderWidth: 0,
        data: []
      }
    ]
	}
	// console.log(state);
	db('patients').count('disease').where('age','<','21').andWhere('disease','=',disease)
	.then( dt => {
	//	console.log(dt[0]);
		state.datasets[0].data.push( dt[0].count );
		if(state.datasets[0].data.length === 3)
		return res.json(state);
		// console.log(state.datasets[0].data[0]);
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('disease').where('age','<','61').andWhere('age','>','20').andWhere('disease','=',disease)
	.then( dt => {
	//	console.log(dt[0]);
		state.datasets[0].data.push( dt[0].count );
		if(state.datasets[0].data.length === 3)
		return res.json(state);
		// console.log(state.datasets[0].data[0]);
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('disease').where('age','>','60').andWhere('disease','=',disease)
	.then( dt => {
	//	console.log(dt[0]);
		state.datasets[0].data.push( dt[0].count );
		// console.log(state.datasets[0].data[0]);
		// console.log(state.datasets[0].data)

		if(state.datasets[0].data.length === 3)
		return res.json(state);
	})
	.catch( err => res.status(400).json('failure'));
	
}
module.exports = {handleAge}
