import React , {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import './signin.css'

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          this.props.RouteChange('home');
        }
      })

    this.setState({signInEmail:'',signInPassword:''});
  }

  render() {
    return (
        <Container style={{padding: '5% 0px 0px 0px'}} component="main" maxWidth="xs">
          <CssBaseline />
          <div className='paper'>
              <div align='center'>
                <Avatar className='avatar'>
                  <LockOutlinedIcon />
                </Avatar>
                <h2>Sign in</h2>
              </div>
              <TextField
              style={{padding_top: '100px'}}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={this.state.signInEmail}
              autoComplete="email"
              onChange={this.onEmailChange}
              autoFocus
              onKeyPress={ event => {
                    if( event.key === 'Enter' )
                      this.onSubmitSignIn()
                  }
                }
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={this.state.signInPassword}
              id="password"
              onChange={this.onPasswordChange}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.onSubmitSignIn();
                }
              }}
              autoComplete="current-password"
            />
            <div style={{padding: '20px 0px 0px 0px'}}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className='submit'
                onClick={this.onSubmitSignIn}
              >Sign In
              </Button>
            </div>
          </div>
          <Box mt={8}>
          </Box>
        </Container>
      );
  }
}

export default SignIn;
