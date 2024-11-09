import { useState } from "react";

const HideShow = () =>{

    const [pass,setPass] = useState("");
    const [flag,setFlag] = useState("password")
    
    const handleOnChange =(e)=>{
        setPass(e.target.value);
        console.log(pass);
    }
    const handleShowPass =()=>{
        if(flag === "password"){
            setFlag("text");
        } else{
            setFlag("password");
        }
    }

    return (<>
    <div className="hide-show">
        <label for="fname">Name</label>
        <input type="text" name="fname" />
        <label for="pass">Password</label>
        <input type={flag} name="pass" onChange={handleOnChange}/>
        <div onClick={handleShowPass}>show</div>
    </div>
    </>);
}

export default HideShow;