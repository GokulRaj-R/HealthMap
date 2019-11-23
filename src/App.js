import React , {Component} from 'react';
import SignUp from './components/Signup/Signup'
import SignIn from './components/Signin/Signin'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import Sidebar from './components/Sidebar/Sidebar'
import Particles from 'react-particles-js';

import './App.css';

const initialState = {
  route: 'signin',
  isSignedIn: false,
  page: 'submit',
}


// const params={   
// particles: {
//     "number": {
//               "value": 100
//           },
//     "size": {
//               "value": 0
//           },
//     "line_linked":{
//       color: "#000000",
//     }
// }}


const params = {
                "particles": {
                    "number": {
                        "value": 150,
                        "density": {
                            "enable": true,
                            "value_area": 1500.4120608655228
                        }
                    },
                    "color": {
                        "value": "#000000"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 3,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 10
                        },
                    },
                    // "opacity": {
                    //     "value": 0.4008530152163807,
                    //     "random": false,
                    //     "anim": {
                    //         "enable": false,
                    //         "speed": 1,
                    //         "opacity_min": 0.1,
                    //         "sync": false
                    //     }
                    // // },
                    // "size": {
                    //     "value": 1.5,
                    //     "random": true,
                    //     "anim": {
                    //         "enable": false,
                    //         "speed": 40,
                    //         "size_min": 0.1,
                    //         "sync": false
                    //     }
                    // },
                    "line_linked": {
                        // "enable": true,
                        // "distance": 100,
                        "color": "#000000",
                        // "opacity": 0.3687847739990702,
                        // "width": 0.6413648243462091
                    },
                    
                }
               
             }


class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  RouteChange = (route) => {
    if( route === 'signout' )
      this.setState(initialState);
    else if( route === 'home' )
      this.setState({isSignedIn : true});
    this.setState({route: route});
  }
 
  PageChange = (page) => {
    this.setState({page:page});
    if( page === 'signout' )
      this.setState(initialState);
  }

  render() {
    const { route , isSignedIn } = this.state;
    return (
      <div>
        {( route === 'home' && isSignedIn === true ) ? 
            <div className='dashb' >
            <Sidebar PageChange={this.PageChange} />
            <Home page={this.state.page} /> 
            </div>
            : 
            <div id='sign'>
            <Navigation RouteChange={this.RouteChange} isSignedIn={isSignedIn}/>
            <Particles className='part' params={params} />
            { route === 'signin' ? <SignIn RouteChange={this.RouteChange} /> : <SignUp RouteChange={this.RouteChange} /> }
            </div>
        }
      </div>
    )
  }

}

export default App;
