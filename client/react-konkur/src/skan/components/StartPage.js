import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";

class Startpage extends Component {
    constructor(props){
        super(props);
        this.state = {branchs:['math', 'pyisics'], unis:['sharif', 'elmos', 'khaje', 'tehran']}
    }

    render() { 
        return ( 
            <div className="costumcontainer">
                    <div className="row category-box">
                        <div className="branch-categ col-md-6">
                            <h2>رشته ها</h2>
                            <ul>
                                {this.state.branchs.map((branch) => <Link to={branch}><li className="categ-item">{branch}</li></Link>)}
                            </ul>
                        </div>
                        <div className="uni-categ col-md-6">
                            <h2>دانشگاه ها</h2>
                            <ul>
                                {this.state.unis.map((uni) => <Link to={uni}><li className="categ-item">{uni}</li></Link>)}
                            </ul>
                        </div>
                    </div>
            </div>
         );
    }
}
 
export default Startpage;