const handlemr = ( req , res , db ) => {
	const {disease} = req.body;
	// return res.json('new');
	const state = {
	  labels: ['Jan', 'Feb' , 'Mar','Apr', 'May' , 'Jun','Jul', 'Aug' , 'Sept','Oct', 'Nov' , 'Dec',],
     datasets: [
      {
        label: 'Multiplicity Rate',
        backgroundColor: [
        'rgba(12,0,122,1)',
        'rgba(223,213,120,1)',
        'rgba(43,24,120,1)',
        'rgba(12,0,122,1)',
        'rgba(223,213,120,1)',
        'rgba(43,24,120,1)',
        'rgba(12,0,122,1)',
        'rgba(223,213,120,1)',
        'rgba(43,24,120,1)',
        'rgba(12,0,122,1)',
        'rgba(223,213,120,1)',
        'rgba(43,24,120,1)',
        ],
        borderColor: [
        'rgba(13,0,120,1)',
        'rgba(123,212,120,1)',  
        'rgba(0,123,0,1)',
        'rgba(13,0,120,1)',
        'rgba(123,212,120,1)',  
        'rgba(0,123,0,1)',
        'rgba(13,0,120,1)',
        'rgba(123,212,120,1)',  
        'rgba(0,123,0,1)',
        'rgba(13,0,120,1)',
        'rgba(123,212,120,1)',  
        'rgba(0,123,0,1)',
        ],
        borderWidth: 1,
        data: []
      }
    ]
	}

	const tmp = [];
	db('patients').count('*').where({month:'jan'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		tmp.push( dt[0].count );
		if( tmp.length === 12 ){
		for( let i=1 ; i<tmp.length ; ++i )
		state.datasets[0].data.push( tmp[i]-tmp[i-1] );
		res.json(state);
		}
		// console.log(state.datasets[0].data[0]);
	})
	.catch( err => res.status(400).json('failure'));
	
	db('patients').count('*').where({month:'feb'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		tmp.push( dt[0].count );
		if( tmp.length === 12 ){
		for( let i=1 ; i<tmp.length ; ++i )
		state.datasets[0].data.push( tmp[i]-tmp[i-1] );
		res.json(state);
		}
		// console.log(state.datasets[0].data[0]);
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('*').where({month:'mar'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		tmp.push( dt[0].count );
		if( tmp.length === 12 ){
		for( let i=1 ; i<tmp.length ; ++i )
		state.datasets[0].data.push( tmp[i]-tmp[i-1] );
		res.json(state);
		}
		// console.log(state.datasets[0].data[0]);
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('*').where({month:'apr'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		tmp.push( dt[0].count );
		if( tmp.length === 12 ){
		for( let i=1 ; i<tmp.length ; ++i )
		state.datasets[0].data.push( tmp[i]-tmp[i-1] );
		res.json(state);
		}
		// console.log(state.datasets[0].data[0]);
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('*').where({month:'may'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		tmp.push( dt[0].count );
		if( tmp.length === 12 ){
		for( let i=1 ; i<tmp.length ; ++i )
		state.datasets[0].data.push( tmp[i]-tmp[i-1] );
		res.json(state);
		}
		// console.log(state.datasets[0].data[0]);
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('*').where({month:'jun'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		tmp.push( dt[0].count );
		if( tmp.length === 12 ){
		for( let i=1 ; i<tmp.length ; ++i )
		state.datasets[0].data.push( tmp[i]-tmp[i-1] );
		res.json(state);
		}
		// console.log(state.datasets[0].data[0]);
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('*').where({month:'jul'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		tmp.push( dt[0].count );
		// console.log(state.datasets[0].data[0]);
		if( tmp.length === 12 ){
		for( let i=1 ; i<tmp.length ; ++i )
		state.datasets[0].data.push( tmp[i]-tmp[i-1] );
		res.json(state);
		}
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('*').where({month:'aug'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		tmp.push( dt[0].count );
		// console.log(state.datasets[0].data[0]);
		if( tmp.length === 12 ){
		for( let i=1 ; i<tmp.length ; ++i )
		state.datasets[0].data.push( tmp[i]-tmp[i-1] );
		res.json(state);
		}
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('*').where({month:'sep'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		tmp.push( dt[0].count );
		// console.log(state.datasets[0].data[0]);
		if( tmp.length === 12 ){
		for( let i=1 ; i<tmp.length ; ++i )
		state.datasets[0].data.push( tmp[i]-tmp[i-1] );
		res.json(state);
		}
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('*').where({month:'oct'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		tmp.push( dt[0].count );
		// console.log(state.datasets[0].data[0]);
		if( tmp.length === 12 ){
		for( let i=1 ; i<tmp.length ; ++i )
		state.datasets[0].data.push( tmp[i]-tmp[i-1] );
		res.json(state);
		}
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('*').where({month:'nov'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		tmp.push( dt[0].count );
		// console.log(state.datasets[0].data[0]);
		if( tmp.length === 12 ){
		for( let i=1 ; i<tmp.length ; ++i )
		state.datasets[0].data.push( tmp[i]-tmp[i-1] );
		res.json(state);
		}
	})
	.catch( err => res.status(400).json('failure'));

	db('patients').count('*').where({month:'dec'}).andWhere({disease:disease})
	.then( dt => {
	//	console.log(dt[0]);
		tmp.push( dt[0].count );
		// console.log(state.datasets[0].data[0]);
		if( tmp.length === 12 ){
		for( let i=1 ; i<tmp.length ; ++i )
		state.datasets[0].data.push( tmp[i]-tmp[i-1] );
		res.json(state);
		}
	})
	.catch( err => res.status(400).json('failure'));

	
	
}
module.exports = {handlemr}
