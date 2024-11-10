import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';
import React from 'react';
import ReactComponent from '../component/ReactComponent';
import { useState } from 'react';

const MainPage = () =>{
    const [isHovered, setIsHovered] = useState(false);
    const mainPage ={
        
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor:'#282738',
        height:'100vh',
        padding:'30px',
    }
    const mainDiv={
        height:'auto',
        width:'auto',
        backgroundColor:'white',
        margin:'10px',
        display:'flex',
        flexDirection:'row',
        borderRadius:'10px',
        transition: 'transform 0.3s ease',
        transform: isHovered ? 'scale(0.95)' : 'scale(1)'
        
    }
    
    const linkStyle ={
        textDecoration:'none', 
        color:'black',
        textWrap:'wrap',
        padding:'10px',
        
    }

    return (
       
            <div style={mainPage}>
                <div style={mainDiv}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Link to="/reactComponent" 
                        style={linkStyle}>ReactComponent
                    </Link>

                </div>
                <div style={mainDiv}>
                    <Link to="/conditionalRendering"
                        style={linkStyle}>
                            Conditional Rendering
                    </Link>
                </div>
                <div style={mainDiv}>
                    <Link to="/apiDataFetching"
                        style={linkStyle}>
                            API Data API Data Fetching
                    </Link>
                </div>
                <div style={mainDiv}>
                    <Link to="/multiselection"
                        style={linkStyle}>
                            Multi Selection Component
                    </Link>
                </div>
                <div style={mainDiv}>
                    <Link to="/foodCard"
                        style={linkStyle}>
                            Food Card
                    </Link>
                </div>
                <div style={mainDiv}>
                    <Link to="/hideshow"
                        style={linkStyle}>
                            Hide Show Password
                    </Link>
                </div>

                
            </div>
        
    )

}

export default MainPage;