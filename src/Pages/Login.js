import { Box, Container, TextField, Typography, CircularProgress, Button } from '@material-ui/core';
import React, { PureComponent } from 'react'
import logo from '../components/media/pandas.png';
import {firestore,auth} from '../firebase';
class Login extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            show_progress: false
        };
        this.handleChange = this.handleChange.bind();
        this.login = this.login.bind();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {

        let validate_data = true;
        this.state.email_err=null;
        this.state.password_err = null;
        if(this.state.email === ""){
            this.state.email_err="Required!";
            validate_data=false;

        }
        if(this.state.password === ""){
            this.state.password_err="Required!";
            validate_data=false;

        }
        if (validate_data) {
            this.state.show_progress=true;
            
        }
        this.setState({
            update:true
        })

        if (validate_data) {
            //login code
            firestore.collection("users")
            .where('email' ,'==',this.state.email)
            .where('isValied','==',true)
            .get()
            .then(querySanpshot=>{
                if (!querySanpshot.empty) {
                   
                    auth.signInWithEmailAndPassword(this.state.email,this.state.password)
                    .then(res=>{
                       this.props.history.replace("/")
                    }).catch(err=>{
                        console.log(err.code);
                        console.log(err);
                        if(err.code === "auth/wrong-password"){
                            this.state.password_err="Incorrect password !";
                        }
                        this.setState({
                            show_progress:false
                        })
                    })
                   
                }else{
                    this.state.email_err = "User Not Allowed !";
                    this.setState({
                        show_progress:false
                    })
                }
            })

        }
    }

    render() {
        return (
            <Container maxWidth="xs">
                <Box bgcolor="white"
                    textAlign="center"
                    p="24px"
                    mt="50px"
                    boxShadow="2"
                    borderRadius="20px">

                    <img src={logo} height="80px" alt="logo" />
                    <Typography variant="h5" color="textSecondary">Admin</Typography>
                    <TextField label="Email" name="email" error={this.state.email_err!=null} helperText={this.state.email_err} onChange={this.handleChange} variant="outlined" size="small" color="secondary" id="" fullWidth margin="normal" />
                    <TextField label="Password" name="password" error={this.state.password_err!=null}   helperText={this.state.password_err} onChange={this.handleChange} variant="outlined" size="small" color="secondary" id="" fullWidth margin="normal" type="password" />
                    <br />
                    <br />
                    {this.state.show_progress ?
                        <CircularProgress size={24} color="primary" name="show_progress" onChange={this.handleChange} thickness={4} />
                        : null}
                    <br />
                    <Button disableElevation onClick={this.login} variant="contained" color="primary" fullWidth>Login</Button>
                </Box>
            </Container>
        )
    }
}
export default Login;