import React from "react";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
           
        }
    }
 
    render(){
       
        return(
            <div className="container mt-3">
            <h2>Comments</h2>
            <div className="media border p-3">
              <img src="" alt="John Doe" className="mr-3 mt-3 rounded-circle" style={{"width":"60px"}} />
              <div className="media-body">
                <h4>John Doe <small><i>Posted on May 10, 2020</i></small></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="media p-3">
                  <img src="" alt="Jane Doe" className="mr-3 mt-3 rounded-circle" style={{"width":"45px"}} />
                  <div className="media-body">
                    <h4>Jane Doe <small><i>Posted on May 10, 2020</i></small></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>  
              </div>
            </div>
          </div>
          
        )
    }
}

export default Home;
