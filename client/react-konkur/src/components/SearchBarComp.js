import React from 'react';
import { CgSearch } from 'react-icons/cg';

const SearchBarComp = () => {
    return (
           <div id="search-bar" dir="ltr" className="col-md-5">
               <div id="search-bar-content">
                <button id="search-bar__btn"><span><i className="fas fa-search"></i></span></button>
                <div id="search-bar__bar">
                    <input type="text" name="query" id="search-bar__input" />
                </div>
                </div>
            </div>
    );
}

export default SearchBarComp;