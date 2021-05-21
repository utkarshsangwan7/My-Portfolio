import React from 'react';
import {Link} from 'react-scroll';
import './Header.css';
import '../scroll';
const Header = ()=>{
    return(
        <div className='header-wrapper show-on-scroll'>
            <h1>Hi, my name is <span id='name'>Utkarsh Sangwan</span><br/>
                The Developer you need
            </h1>
            <a href='/' className='anchor'><button className='buttons'><Link  to="about" spy={true} smooth={true}>Know more</Link></button></a>
        </div>
    );
}

export default Header;