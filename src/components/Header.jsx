import React, { Component } from "react";
import ParticlesBg from "particles-bg";
// import Fade from "react-reveal";
import { Link, Navigate  } from "react-router-dom";

class Header extends Component {
  state = {
    reload: false
  };
  logout = () => {
    sessionStorage.removeItem("username");
    sessionStorage.clear(); 
    this.setState({reload: true });
}
  render() {
    if (this.state.reload) {
      // redirect to home if signed up
      return <Navigate  to ="/" />;
    }
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const description = this.props.data.description;
    const session =  sessionStorage.getItem('username');
    let link;
    let linktwo;
    if(session) {
      link = <button className="button btn github-btn" type='button' onClick={this.logout}>Log Out</button>;
      linktwo = <Link className="button btn github-btn" to="/playlist" >My playlist</Link>;
    } else {
      link =  <Link className="button btn github-btn" to="/signup" >Signup</Link>;
      linktwo = <Link className="button btn github-btn" to="/login" >Login</Link>;
    }
    return (
      <header id="home">
        <ParticlesBg color="#ff0000" type="fountain" bg={true} />
        <div className="row banner">
          <div className="banner-text">
              <h1 className="responsive-headline">{name}</h1>
              <h3>{description}.</h3>
            <hr />
              <ul className="social">
              {link}{linktwo}
              </ul>
          </div>
        </div>

       
      </header>
    );
  }
}

export default Header;
