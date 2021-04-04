import React from 'react';
import {NavLink} from 'react-router-dom';
const Nav: React.FC= () => {
    return(
        <div style={{textAlign: 'center', background: "olive", padding: "10px 0"}}>
            <NavLink exact style ={{color : 'white', marginLeft:'20px'}} activeStyle={{color : 'black'}} to='/'>
                Home
            </NavLink>
            <NavLink exact style ={{color : 'white', marginLeft:'20px'}} activeStyle={{color : 'black'}} to='/productList'>
                Product
            </NavLink>
        </div>
    )
}

export default Nav;