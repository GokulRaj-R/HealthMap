import React from 'react';
import './nav.css'

const Navigation = ({RouteChange , isSignedIn }) => {
      return (
        <nav style={{display: 'flex'}}>
        	<div id='navlogo'> <p className='navp' onClick={ () => {
        		RouteChange('signin')
        	 }}><strong>HealthMap</strong></p> </div>

        	{isSignedIn === true ? <p className='navp' onClick={ () => RouteChange('signout') }>Sign Out</p> : 
        	<div>
        	<p className='navp' onClick={ () => RouteChange('signin') }><strong>Sign In</strong></p>
	        <p className='navp' onClick={ () => RouteChange('signup') }><strong>Register</strong></p>
	        </div>}
        </nav>
      )
}

export default Navigation;


