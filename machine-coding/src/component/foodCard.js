import HomeButton from "../MainPage/HomeButton";
import DishImage from "../images/DishImage.jpg";

const FoodCard = () =>{

    const foodCard ={
        display:'flex',
        flexDirection:'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        width:'100%',
        height:'120px',
        backgroundColor:'white',
    }

    return (
        <div style={{backgroundColor:"black", height:'100vh'}}>
            <HomeButton/>
            <div style={{marginLeft:"40%", fontSize:"30px", color:'white'}}> FOOD CARD </div>
            <div style={foodCard}>
                <div><img src={DishImage} alt="DishImage" style={{width:'100px', height:'100px', marginLeft:'10px', borderRadius:'5px'}}/></div>
                <div><p>This is cool paella hot noddles, sauce with red, oregano spices</p></div>
                <div></div>
            </div>
        </div>
    );
}

export default FoodCard;