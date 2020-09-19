import React from 'react';
import { CgSearch } from 'react-icons/cg';
import { BrowserRouter, Router, Switch, Route,Link } from "react-router-dom";

const MenuComp = () => {
    return ( 
        <div className="col-md-7 menu-bar">
            <ul>
               <Link to="/"><li>خانه</li></Link>
               <Link to="/start"><li>دانشگاه ها</li></Link>
               <Link to="/start"><li>رشته ها</li></Link>
               <Link><li>درباره ما</li></Link>
               <Link to="/uni"><li>حمایت</li></Link>
            </ul>
         </div>
        
    );
}

export default MenuComp;