import React from 'react';
import "../css/Branchpage.css"
import SearchBarComp from './SearchBarComp'
import MenuComp from './MenuComp'
class HeaderComp extends React.Component {
    render() {
        return (
            <header dir="rtl">
                <div className="row">
                <MenuComp />
                <SearchBarComp />

                </div>
            </header>
        );
    }
}

export default HeaderComp;