import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

import './About.css'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export default function About() {
	const classes = useStyles();
	return (
		<div align='center'>
			<Card align='center' id='aboutcard' className={classes.card} >
      <h1 id='abouth' > About HealthMap </h1> 
			<p>In our increasingly interconnected world, it is crucial to understand the risk of an outbreak 
      originating in humans or animals. Current healthcare professionals already record diagnostic data 
      for all of their patients in the form of succinct codes. However, no unified or effective system 
        existed with which to sort the data meaningfully. Essentially this means a wealth of data with 
      no way to make use of it.</p>
  
      <p>HealthMap is a system which aggregates all available diagnostic data from approved sources, 
      and presents it to the user in a useable, tangible way. Using our system, data can be viewed both 
      textually and visually, sorted and filtered to the user's desire, all part of a rich user experience 
      which allows healthcare officials to make well-informed decisions about their patients. Data can be 
      viewed securely by authorized users, including but not limited to locational breakdown of diagnostic data, etc.</p>
      <br />
			</Card>
		</div>
	)
}