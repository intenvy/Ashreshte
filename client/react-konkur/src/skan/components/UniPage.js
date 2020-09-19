import React, { Fragment } from 'react';
import HeaderComp from './HeaderComp';
import UniIntroComp from './UniIntroComp';
import UniApplyComp from './UniApplyComp';
// import UniJobComp from './UniJobComp';
import UniKonkurRankComp from './UniKonkurRankComp';
import Footer from './Footer';
import "../css/Unipage.css"

import axios from 'axios';

class BranchPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {unis:["sharif", "elmos"], uniName:""};
        
    }
    componentWillMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                console.log(response);
            })
    }
    checkUniExist(){
        console.log(this.state.uniName)
        if(this.state.unis.includes(this.props.match.params.name)){
            return <div><UniIntroComp uniname={this.props.match.params.name}/><UniKonkurRankComp uniname={this.props.match.params.name}/><UniApplyComp uniname={this.props.match.params.name}/><Footer /></div>
        }
        return <h1>صفحه مورد نظر پیدا نشد!</h1>
    }
    render() {
        return (
            <Fragment>
                {this.checkUniExist()}
            </Fragment>
        );
    }
}

export default BranchPage;