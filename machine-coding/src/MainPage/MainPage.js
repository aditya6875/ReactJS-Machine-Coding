import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';
import React from 'react';
import ReactComponent from '../component/ReactComponent';

const MainPage = () =>{
    const mainPage ={
        
        display: 'flex',
        flexDirection: 'row',
        backgroundColor:'#282738',
        height:'100vh',
        padding:'30px'
    }
    const mainDiv={
        height:'23px',
        width:'auto',
        backgroundColor:'white'

    }
    const linkStyle ={
        textDecoration:'none', 
        color:'black',
        padding:'20px'
    }

    return (
       
            <div style={mainPage}>
                <div style={mainDiv}>
                    <Link to="/reactComponent" 
                        style={linkStyle}>ReactComponent
                    </Link>
                </div>
                

                
            </div>
        
    )

}

export default MainPage;