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
			<p>ak;jdklsjasdklfjklasdjklasdjflk;asdjfkjasdkljasdklasdjfklaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
			</Card>
		</div>
	)
}