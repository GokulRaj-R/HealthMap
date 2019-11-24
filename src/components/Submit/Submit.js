import React , {useState} from 'react';
import Grid from '@material-ui/core/Grid';
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

const gen = [
  {
    value: 'M',
    label: 'Male',
  },
  {
    value: 'F',
    label: 'Female',
  },
];

const bgroup = [
  {
    value: 'A+',
    label: 'A+',
  },
  {
    value: 'A-',
    label: 'A-',
  },
  {
    value: 'B+',
    label: 'B+',
  },
  {
    value: 'B-',
    label: 'B-',
  },
  {
    value: 'O+',
    label: 'O+',
  },
  {
    value: 'O-',
    label: 'O-',
  },
  {
    value: 'AB+',
    label: 'AB+',
  },
  {
    value: 'AB-',
    label: 'AB-',
  },
  
  
];

const mth = [
  {
    value: 'jan',
    label: 'January',
  },
  {
    value: 'feb',
    label: 'February',
  },
  {
    value: 'mar',
    label: 'March',
  },
  {
    value: 'apr',
    label: 'April',
  },
  {
    value: 'may',
    label: 'May',
  },
  {
    value: 'jun',
    label: 'June',
  },
  {
    value: 'jul',
    label: 'July',
  },
  {
    value: 'aug',
    label: 'August',
  },
  
  {
    value: 'sep',
    label: 'September',
  },
  {
    value: 'oct',
    label: 'October',
  },
  {
    value: 'nov',
    label: 'November',
  },
  {
    value: 'dec',
    label: 'December',
  },
  
];

export default function Submit(props) {
  const classes = useStyles();
  const classes2 = useStyles2();

// onChange={e => {
//   const val = e.target.value;
//   setMessage(prevState => {
//     return { ...prevState, message: val }
//   });
// }}
  
  const istate = {
    name: '',
    gender: 'M',
    age: 0,
    locality: '',
    bloodgroup: 'a+',
    antigen1: '',
    antigen2: '',
    disease: '',
    symptom2: '',
    medicine: '',
    month: 'jan',
  };

  const [patient, setPatient] = useState({
    name: '',
    gender: 'M',
    age: 0,
    locality: '',
    bloodgroup: 'a+',
    antigen1: '',
    antigen2: '',
    disease: '',
    symptom2: '',
    medicine: '',
    month: 'jan',
  });

  const handleSubmit = (event) => {
    console.log(patient)
    fetch('http://localhost:3000/submit', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(patient)
    })
      .then(response => response.json())

    setPatient(istate);
   }


  return (
    <Card align='center' id='submitcard' className={classes2.card}>
      <h1>Patient Details</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            onChange={ e => { 
              const val = e.target.value;
              setPatient( prevState => { return { ...prevState , name: val } }); 
            } }
            id="name"
            name="name"
            label="Name"
            value={patient.name}
            fullWidth
            autoComplete="name"
          />
        </Grid>

        <Grid item xs={3}>
        <TextField
          id="age"
          label="Age"
          name="age"
           value={patient.age}
          type="number"
          onChange={ e => { 
              const val = e.target.value;
              setPatient( prevState => { return { ...prevState , age: val } }); 
            } }
          
        />
        </Grid>


        <Grid item xs={3}> 
             <TextField
            id="gender"
            select
            label="Gender"
            onChange={ e => { 
              const val = e.target.value;
              setPatient( prevState => { return { ...prevState , gender: val } }); 
            } }
            className={classes.textField}
            value={patient.gender}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu,
              },
            }}
            // helperText="Please select your currency"
            // margin="normal"
             >
            {gen.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
       

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="locality"
            name="locality"
            label="locality"
             value={patient.locality}
            onChange={ e => { 
              const val = e.target.value;
              setPatient( prevState => { return { ...prevState , locality: val } }); 
            } }
            fullWidth
            autoComplete="locality"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Antigen 1"
            name="Antigen 1"
            label="Antigen 1"
             value={patient.antigen1}
            onChange={ e => { 
              const val = e.target.value;
              setPatient( prevState => { return { ...prevState , antigen1: val } }); 
            } }
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Antigen 2"
            name="Antigen 2"
            label="Antigen 2"
             value={patient.antigen2}
            onChange={ e => { 
              const val = e.target.value;
              setPatient( prevState => { return { ...prevState , antigen2: val } }); 
            } }
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Disease"
            name="Disease"
             value={patient.disease}
            onChange={ e => { 
              const val = e.target.value;
              setPatient( prevState => { return { ...prevState , disease: val } }); 
            } }
            label="Disease"
            fullWidth
            autoComplete="Disease"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="symptom 2"
            name="symptom 2"
             value={patient.symptom2}
            onChange={ e => { 
              const val = e.target.value;
              setPatient( prevState => { return { ...prevState , symptom2: val } }); 
            } }
            label="symptom 2"
            fullWidth
            autoComplete="symptom 2"
          />
        </Grid>

         <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Medicine"
            id="medicine"
             value={patient.medicine}
            fullWidth
            onChange={ e => { 
              const val = e.target.value;
              setPatient( prevState => { return { ...prevState , medicine: val } }); 
            } }
          />
        </Grid>

        <Grid item xs={3} sm={3}>
          <TextField
            id="month"
            select
            label="Month"
            onChange={ e => { 
              const val = e.target.value;
              setPatient( prevState => { return { ...prevState , month: val } }); 
            } }
            className={classes.textField}
            value={patient.month}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu,
              },
            }}
            // helperText="Please select your currency"
      
             >
            {mth.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
       
       <Grid item xs={2} sm={2}> 
             <TextField
            id="bgroup"
            select
            label="BloodGroup"
            onChange={ e => { 
              const val = e.target.value;
              setPatient( prevState => { return { ...prevState , bloodgroup: val } }); 
            } }
            className={classes.textField}
            value={patient.bloodGroup}
            // margin="normal"
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu,
              },
            }}
            // helperText="Please select your currency"
            // margin="normal"
             >
            {bgroup.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
           <Button variant="outlined" color="primary" onClick={handleSubmit} className={classes.button}>
             Submit
          </Button>
        </Grid>
      </Grid>

    </Card>
  )
}
