import React from 'react';
import HomeButton from '../MainPage/HomeButton';

const ReactComponent = () =>{

    const maindiv={
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItem:'center'
    }
    const reactdiv ={

    }

    return (
        <>
        <HomeButton/>
        <div style={maindiv}>
            
            <div style={reactdiv}>
                <h4>Hey, I am a React Component!</h4>
                <h5>This is from Machine Coding Round</h5>
            </div>
        </div>
        </>
    );
}
export default ReactComponent;