import React,{ Component} from 'react';
import ParticlesBg from "particles-bg";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            isSignedUp:false
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name] : e.target.value});
    }

   

    contactSubmit = e => {
        e.preventDefault();
        axios.get("https://61c086fb33f24c0017823485.mockapi.io/signup",{ params: { email: this.state.email } })
        .then(response => {
            console.log(response);
            sessionStorage.setItem("username",response.data.id);
            console.log(response.data.id);
            this.setState({isSignedUp: true });
        })
        .catch(error =>{
            console.log(error);
        });
       
        
    }
    render() {
        const {email,password} = this.state;
        if (this.state.isSignedUp) {
            // redirect to home if signed up
            return <Navigate  to ="/" />;
        }
        return(
        <header id="home">
        <ParticlesBg type="lines" bg={true} />
    
        <div className="row banner">
              <div className="banner-text">
        <div className="form">
          <div>
            <h1>User Login</h1>
          </div>
     
          
     
          <form name="loginform" className="loginform" onSubmit= {this.contactSubmit}>
            {/* Labels and inputs for form data */}
            <label className="label">Email</label>
            <input onChange={this.changeHandler} className="input"
              value={email} name="email" type="email" required/>
     
            <label className="label">Password</label>
            <input onChange={this.changeHandler} className="input"
              value={password} name="password" type="password" required/>
     
            <button className="btn" type="submit">
              Submit
            </button>&nbsp;&nbsp;
            <Link className="button btn" to="/" >Cancel</Link>
            <br />
            <div className= "logintext">
         Not a member?.
          <Link to="/signup" >Signup!</Link>
            </div>
          </form>
        </div>
        </div>
        </div>
        </header>
        );
    }
}

export default Signin;