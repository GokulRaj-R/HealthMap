import React from 'react';
import './nav.css'

const Navigation = ({RouteChange , isSignedIn }) => {
      return (
        <nav style={{display: 'flex'}}>
        	<div id='navlogo'> <p className='navp' onClick={ () => {
        		RouteChange('signin')
        	 }}>HealthMap</p> </div>

        	{isSignedIn === true ? <p className='navp' onClick={ () => RouteChange('signout') }>Sign Out</p> : 
        	<div>
        	<p className='navp' onClick={ () => RouteChange('signin') }>Sign In</p>
	        <p className='navp' onClick={ () => RouteChange('signup') }>Register</p>
	        </div>}
        </nav>
      )
}

export default Navigation;


