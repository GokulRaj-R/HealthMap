import React , {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';

class SignUp extends Component {
 constructor(props) {
    super(props);
    this.state = {
      signUpName: '',
      signUnEmail: '',
      signUnPassword: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    // fetch('http://localhost:3000/signup', {
    //   method: 'post',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({
    //     name: this.state.name,
    //     email: this.state.email,
    //     password: this.state.password
    //   })
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data) {
    //       this.props.onRouteChange('signin');
    //     }
    //   })
    this.props.RouteChange('signin');
  }

  render() {
    return (
      <Container style={{padding: '4% 0px 0px 0px'}} component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <div align='center'>
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Register</h2>
          </div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="Name"
                  variant="outlined"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  onChange={this.onNameChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={this.onEmailChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.onPasswordChange}
                />
              </Grid>
            </Grid>
            <div style={{padding: '20px 0px 0px 0px'}}>
              <Button
                onClick={this.onSubmitSignIn}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                > Register
              </Button>
            </div>
        </div>
        <Box mt={5}>
        </Box>
      </Container>
    );
  }
}

export default SignUp;
