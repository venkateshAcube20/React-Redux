import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginForm from '../components/login'
import Home from "../components/Home.js"


class Routes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentWillMount() {
    let userName = localStorage.getItem("userName")
    let password = localStorage.getItem("password")
    
    console.log("=====userName==========", userName, password)

  }

  render() {
    let userName = localStorage.getItem("userName")
    let password = localStorage.getItem("password")
    if (userName) {
      return (
        <div >
          <Router>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/" component={LoginForm} />
            </Switch>
          </Router>
        </div>
      )
    } else {
      return (
        <div>
          <Router>
            <Switch> 
              <Route exact path="/" component={LoginForm} />  
            </Switch>
          </Router>
        </div>

      )
    }

  }
}
export default Routes;
