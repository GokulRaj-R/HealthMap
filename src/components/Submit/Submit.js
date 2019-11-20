import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import './Submit.css'



const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const useStyles2 = makeStyles({
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

export default function Submit() {
  const classes = useStyles();
  const classes2 = useStyles2();

  return (
    <Card align='center' id='submitcard' className={classes2.card}>
      <Typography variant="h4" gutterBottom>
        Patient Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Disease"
            name="Disease"
            label="Disease"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="medicationUsed"
            name="medicationUsed"
            label="Medication Used"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            placeholder="Date"
            type='date'
            id="date"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
           <Button variant="outlined" color="primary" className={classes.button}>
             Submit
          </Button>
        </Grid>
      </Grid>

    </Card>
  )
}
