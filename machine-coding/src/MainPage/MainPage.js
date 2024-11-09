import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';
import React from 'react';
import ReactComponent from '../component/ReactComponent';

const MainPage = () =>{
    const mainPage ={
        
        display: 'flex',
        flexDirection: 'row',
        backgroundColor:'#282738',
        height:'100vh',
        padding:'30px',
    }
    const mainDiv={
        height:'23px',
        width:'auto',
        backgroundColor:'white',
        margin:'10px',
        display:'flex',
        flexDirection:'row',
        

    }
    const linkStyle ={
        textDecoration:'none', 
        color:'black',
        width:'100px',
        textWrap:'wrap'
        
    }

    return (
       
            <div style={mainPage}>
                <div style={mainDiv}>
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