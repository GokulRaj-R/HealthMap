import React , {Component} from 'react';
import SignUp from './components/Signup/Signup'
import SignIn from './components/Signin/Signin'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import Sidebar from './components/Sidebar/Sidebar'
import Particles from 'react-particles-js';

import './App.css';

const initialState = {
  route: 'home',
  isSignedIn: true,
  page: 'about',
  user: {
    id: '',
    name: '',
    email: '',
  }
}


const params={   
particles: {
    "number": {
              "value": 70
          },
    "size": {
              "value": 10
          },
    "line_linked":{
      color: "#000000",
    }
}}


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
            <div className='dashb'>
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
