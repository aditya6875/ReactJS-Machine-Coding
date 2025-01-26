import React, { useState } from "react";
const StarRating = () =>{

    const[rating,setRating] = useState(0);

    const containerStyle ={
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        backGroundColor:'gray'
    }
    const div1={
        display:'flex',
        flexDirection:'row',
        height:'200px',
        width:'200px',
        backGroundColor:'blue'
    }
    const div2 = (id) => ({
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: id <= rating ? "gold" : "lightgray",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: "18px",
        fontWeight: "bold",
      });

    const handleIt=(e)=>{
        setRating(e);

    }

    return (
        
        <container style={containerStyle}>
            <h1>Rate our Service</h1>
            <div style={div1}>
            {[1, 2, 3, 4, 5].map((id) => (
                <div
                    key={id}
                    style={div2(id)} // Apply styles dynamically based on rating
                    onClick={() => handleIt(id)} // Set rating on click
                >
                    ★
                </div>
            ))}
            </div>
            <p>Thank you for your rating: {rating}</p>
        </container>
        
    );
}

export default StarRating;