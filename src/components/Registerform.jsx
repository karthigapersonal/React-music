import React,{ Component} from 'react';
import ParticlesBg from "particles-bg";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';

class Registerform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
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
            if(response.data.length > 0) {
                alert("User already exists");
            } else {
                axios.post("https://61c086fb33f24c0017823485.mockapi.io/signup",this.state)
                .then(response => {
                  alert("User registered");
                  sessionStorage.setItem("username",response.data.id);
                  console.log(response.data.id);
                  this.setState({isSignedUp: true });
                 
                })
                .catch(error =>{
                    console.log(error)
                });
            }
        })
        .catch(error =>{
            console.log(error);
        });
       
        
    }
    render() {
        const {name,email,password} = this.state;
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
            <h1>User Registration</h1>
          </div>
     
          
     
          <form name="contactform" className="contactform" onSubmit= {this.contactSubmit}>
            {/* Labels and inputs for form data */}
            <label className="label">Name</label>
            <input onChange={this.changeHandler} className="input"
              value={name} name="name" type="text" required/>
     
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
            Already registred?.
            <Link to="/login" >Login!</Link>
            </div>
          </form>
        </div>
        </div>
        </div>
        </header>
        );
    }
}

export default Registerform;