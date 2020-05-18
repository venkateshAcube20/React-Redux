import React from "react";
import * as loginaction from "../actions/login.js"
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import "./login.css";

class ModalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onClick=async()=>{
    if(this.state.username=="" || this.state.password==""){
      alert("Please enter username or password")
    }else if(this.state.username=="admin" || this.state.password=="admin"){
      await this.props.useraction.loginUser(this.state.username, this.state.password) 
  } else {
    alert("Please enter correct Details")
  }
}

componentDidUpdate=()=>{
    
  let data = this.props.getUserData
 
   if(data.users=="admin"){
     this.props.history.push('/home')
  }    
}
  render() {
        
    return (
        <div className="back">
      
      <div className="div-center content">
        <h2>Login</h2>  
        <input type="text" 
               name="username"
               value={this.state.username} 
               placeholder="User Name"
               onChange={this.handleChange} />
        <br/>       

        <input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange}
        />
        <br/>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={this.onClick}
        >
          Sign In
        </button>
        <p>Please enter username and password as admin and admin</p>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
    getUserData : state.getLoginReducer
})

const mapDispatchToProps = (dispatch) =>({
    useraction: bindActionCreators(loginaction, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(ModalLoginForm);
