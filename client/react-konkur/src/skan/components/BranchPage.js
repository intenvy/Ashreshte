import React from 'react';
import HeaderComp from './HeaderComp';
import BranchIntroComp from './BranchIntroComp';
import BranchApplyComp from './BranchApplyComp';
import BranchJobComp from './BranchJobComp';
import BranchKonkurRankComp from './BranchKonkurRankComp';
import Footer from './Footer';
import axios from 'axios';

class BranchPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {branchName:""}
    }
    componentWillMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                console.log(response);
            })
    }
    render() {
        return (
            <div>
                <BranchIntroComp />
                <BranchKonkurRankComp />
                <BranchApplyComp />
                {/* <BranchJobComp /> */}
                <Footer />
            </div>
        );
    }
}

export default BranchPage;