import { Button } from "@mui/material";
import { useState } from "react";
import HomeButton from "../MainPage/HomeButton";

const ConditionalRendering = () =>{

    const [username, setusername] = useState("Ex: adi7800");
    const [password, setpassword] = useState("...");
    const [isLogin, setisLogin] = useState("");
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(username==="aditya7800" && password==="jarvis"){
            setisLogin(true);
        }
        else{
            setisLogin(false);
        }
    }

    return (
        <>
        <HomeButton/>
            <form onSubmit={handleSubmit}>
                <h4>Login Details</h4>
                <label>Username:
                    <input type="text" name="username" value={username} onChange={(e)=>setusername(e.target.value)} />
                </label>
                <label>Password:
                    <input type="text" name="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
                </label>
                <button type="submit">Login</button>
            </form>

            {isLogin===true ?
                (<>
                <h3>Login Successfull</h3>
            </>)    : (<h3>
                Wrong credentials
            </h3>)}
        </>
    );
}


export default ConditionalRendering;