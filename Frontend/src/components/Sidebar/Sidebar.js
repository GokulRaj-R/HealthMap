import React from 'react';
import './Sidebar.css'

export default function Sidebar({PageChange}) {
  return (
    	<div id='cssmenu'>
			<ul>
			   <li><p onClick={ () => PageChange('home') } ><span>Dashboard</span></p></li>
			   <li><p onClick={ () => PageChange('submit') } ><span>Submit</span></p></li>
			   <li><p onClick={ () => PageChange('about') }><span>About</span></p></li>
			   <li><p onClick={ () => PageChange('signout') }><span>Sign Out</span></p></li>
			   
			</ul>
		</div>
   )

}