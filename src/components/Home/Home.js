import React , {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Submit from '../Submit/Submit';
import About from '../About/About';

import {Bar , Pie , Line} from 'react-chartjs-2';

import './Home.css'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  menu: {
    width: 200,
  },
}));

// const handleGenState = () => {
//     fetch('http://localhost:3000/gender', {
//       method: 'post',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify('antigen1')
//     })
//       .then(response => response.json())
//       .then( data => {
      
//         console.log(data);
//           return data;
//       })
//    }

export default function Home({page}) {
  const classes = useStyles();
  const [genData,setgenData] = useState({
    labels: ['Male', 'Female'],
     datasets: [
      {
        label: 'Gender Distribution',
        backgroundColor: ['rgba(123,0,120,1)',
        'rgba(0123,1,0,1)',
        ],
        borderColor: ['rgba(0,0,0,1)',
        'rgba(0,0,0,1)',
        ],
        borderWidth: 2,
        data: [5,4]
      }
    ]
  });

  const [monData,setmonData] = useState({
    labels: ['Jan', 'Feb' , 'Mar' , 'Apr'],
     datasets: [
      {
        label: 'Affected Persons',
        backgroundColor: [
        'rgba(123,0,120,1)',
        'rgba(123,0,120,1)',
        'rgba(123,0,120,1)',
        'rgba(0123,1,0,1)',
        ],
        borderColor: [
        'rgba(123,0,120,1)',
        'rgba(123,0,120,1)',  
        'rgba(0,0,0,1)',
        'rgba(0,0,0,1)',
        ],
        borderWidth: 2,
        data: [5,4,3,2]
      }
    ]
  });

  const [ageData,setageData] = useState({
    labels: ['0-20', '21-60' , '60+'],
     datasets: [
      {
        label: 'Age Groups',
        backgroundColor: [
        'rgba(123,0,120,1)',
        'rgba(123,0,120,1)',
        'rgba(123,0,120,1)',
        ],
        borderColor: [
        'rgba(123,0,120,1)',
        'rgba(123,0,120,1)',  
        'rgba(0,0,0,1)',
        ],
        borderWidth: 2,
        data: [5,4,3]
      }
    ]
  });

  const [mrData,setmrData] = useState({
    labels: ['Jan', 'Feb' , 'Mar'],
     datasets: [
      {
        label: 'Multiplicity Rate',
        backgroundColor: [
        'rgba(123,0,120,1)',
        'rgba(123,0,120,1)',
        'rgba(123,0,120,1)',
        ],
        borderColor: [
        'rgba(123,0,120,1)',
        'rgba(123,0,120,1)',  
        'rgba(0,0,0,1)',
        ],
        borderWidth: 2,
        data: [5,4,3]
      }
    ]
  });

  const [dlist,setdList] = useState([]);
  const [disease,setdisease] = useState('');

  useEffect(() => {
    // Update the document title using the browser API
    fetch('http://localhost:3000/gender', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({disease:disease})
      })
      .then(response => response.json())
      .then( data => {
      
        // console.log(data);
          setgenData(data);
      });


      fetch('http://localhost:3000/month', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({disease:disease})
      })
      .then(response => response.json())
      .then( data => {
      
        // console.log(data);
          setmonData(data);
      });


      fetch('http://localhost:3000/age', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({disease:disease})
      })
      .then(response => response.json())
      .then( data => {
      
        // console.log(data);
          setageData(data);
      });


      fetch('http://localhost:3000/mr', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({disease:disease})
      })
      .then(response => response.json())
      .then( data => {
      
        // console.log(data);
          setmrData(data);
      });

      fetch('http://localhost:3000/dlist', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify()
      })
      .then(response => response.json())
      .then( data => {
      
        console.log(data);
          setdList(data);
      });


  },[page,disease]);

  let loadpage;
  if(page === 'submit')
  	loadpage = <Submit />; 
  else if( page === 'about' )
  	loadpage = <About />;
  else if( page === 'home' )
    loadpage = <div >

      <div id='search' align='center'>
       <TextField 
          select
          // label="Select"
          // id="Select"
          // placeholder="Select"
          value={disease}
          className={classes.textField}
          onChange={ e => { 
              const val = e.target.value;
              setdisease(val); 
            } }
          // value={currency}
         // onChange={}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select category"
          margin="normal"
        >
          {dlist.map(({disease}) => (
            <option key={disease} value={disease}>
              {disease}
            </option>
          ))}
        </TextField>
        </div>

      <div className='homemain'>
       <Bar 
          data={monData}
           width={10}
           height={5}
          options={{
            title:{
              display:true,
              text:'Monthwise Distribution',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
             // maintainAspectRatio: false
          }}
        />

        <Pie 
          data={genData}
          options={{
            title:{
              display:true,
              text:'Gender Distribution',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>

       <div className='homemain'>
       <Line
          data={mrData}
           options={{
            title:{
              display:true,
              text:'Multiplicity Rate',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
             // maintainAspectRatio: false
          }}
        />

        <Pie 
          data={ageData}
          options={{
            title:{
              display:true,
              text:'Age Distribution',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
    </div>
    

  return (
  	<div id='homecard'>
  	{loadpage}
  	</div>
  )
}