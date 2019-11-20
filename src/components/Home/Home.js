import React from 'react';
import Submit from '../Submit/Submit';
import About from '../About/About';

import './Home.css'

export default function Home({page}) {
  let loadpage;
  if(page === 'submit')
  	loadpage = <Submit />; 
  else if( page === 'about' )
  	loadpage = <About />;

  return (
  	<div id='homecard'>
  	{loadpage}
  	</div>
  )

  // return(
  // 	<Submit />
  // 	)
}