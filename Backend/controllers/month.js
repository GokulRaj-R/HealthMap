const handleMonth = ( req , res , db ) => {
	const {disease} = req.body;
	// return res.json('new');
	const state = {
	  labels: ['Jan', 'Feb' , 'Mar','Apr', 'May' , 'Jun','Jul', 'Aug' , 'Sept','Oct', 'Nov' , 'Dec',],
     datasets: [
      {
        label: 'Monthwise Distribution',
        backgroundColor: [
        'rgba(128,128,0,0.6)',
        'rgba(25,25,255,0.6)',
        'rgba(89,89,89,0.6)',
        'rgba(138,54,15,0.6)',
        'rgba(0,230,115,0.6)',
        'rgba(255,255,25,0.6)',
        'rgba(255,25,102,0.6)',
        'rgba(64,255,25,0.6)',
        'rgba(51,255,255,0.6)',
        'rgba(230,0,0,.6)',
        'rgba(204,0,170,.6)',
        'rgba(255,128,0,0.6)',
        ],
        borderColor: [
        'rgb(128,128,0)',
        'rgb(25,25,255)',  
        'rgb(48,48,48)',
        'rgb(138,54,15)',
        'rgb(0,230,115)',  
        'rgb(255,255,25)',
        'rgb(255,25,102)',
        'rgb(64,255,25)',  
        'rgb(51,255,255)',
        'rgb(230,0,0)',
        'rgb(204,0,170)',  
        'rgba(255,128,0,1)',
        ],
        borderWidth:1,
        data: []
      }
    ]
	}
	// console.log(state);
	db('patients').count('*').where({month:'jan'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		state.datasets[0].data.push( dt[0].count );
		// console.log(state.datasets[0].data[0]);
		if( state.datasets[0].data.length === 12 )
		res.json(state);
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('*').where({month:'feb'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		state.datasets[0].data.push( dt[0].count );
		// console.log(state.datasets[0].data[0]);
		if( state.datasets[0].data.length === 12 )
		res.json(state);
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('*').where({month:'mar'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		state.datasets[0].data.push( dt[0].count );
		// console.log(state.datasets[0].data[0]);
		if( state.datasets[0].data.length === 12 )
		res.json(state);
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('*').where({month:'apr'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		state.datasets[0].data.push( dt[0].count );
		// console.log(state.datasets[0].data[0]);
		// console.log(state.datasets[0].data)
		if( state.datasets[0].data.length === 12 )
		res.json(state);
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('*').where({month:'may'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		state.datasets[0].data.push( dt[0].count );
		// console.log(state.datasets[0].data[0]);
		// console.log(state.datasets[0].data)
		if( state.datasets[0].data.length === 12 )
		res.json(state);
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('*').where({month:'jun'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		state.datasets[0].data.push( dt[0].count );
		// console.log(state.datasets[0].data[0]);
		// console.log(state.datasets[0].data)
		if( state.datasets[0].data.length === 12 )
		res.json(state);
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('*').where({month:'jul'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		state.datasets[0].data.push( dt[0].count );
		// console.log(state.datasets[0].data[0]);
		// console.log(state.datasets[0].data)
		if( state.datasets[0].data.length === 12 )
		res.json(state);
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('*').where({month:'aug'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		state.datasets[0].data.push( dt[0].count );
		// console.log(state.datasets[0].data[0]);
		// console.log(state.datasets[0].data)
		if( state.datasets[0].data.length === 12 )
		res.json(state);
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('*').where({month:'sep'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		state.datasets[0].data.push( dt[0].count );
		// console.log(state.datasets[0].data[0]);
		// console.log(state.datasets[0].data)
		if( state.datasets[0].data.length === 12 )
		res.json(state);
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('*').where({month:'oct'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		state.datasets[0].data.push( dt[0].count );
		// console.log(state.datasets[0].data[0]);
		// console.log(state.datasets[0].data)
		if( state.datasets[0].data.length === 12 )
		res.json(state);
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('*').where({month:'nov'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		state.datasets[0].data.push( dt[0].count );
		// console.log(state.datasets[0].data[0]);
		// console.log(state.datasets[0].data)
		if( state.datasets[0].data.length === 12 )
		res.json(state);
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('*').where({month:'dec'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		state.datasets[0].data.push( dt[0].count );
		// console.log(state.datasets[0].data[0]);
		// console.log(state.datasets[0].data)
		if( state.datasets[0].data.length === 12 )
		res.json(state);
	})
	.catch( err => res.status(400).json('failure'));
	
}
module.exports = {handleMonth}
