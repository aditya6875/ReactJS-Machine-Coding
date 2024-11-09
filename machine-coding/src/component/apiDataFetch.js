import { useEffect, useState } from "react";
import HomeButton from "../MainPage/HomeButton";

const ApiDataFetch = () =>{

    const [orders, setOrders] = useState(null);

    const apiFetch = () => {
        fetch('https://65b6897ada3a3c16ab00da80.mockapi.io/api/orders')
          .then(resp => {
            if (!resp.ok) {
              throw new Error("API call failed");
            }
            return resp.json();  // Convert response to JSON
          })
          .then(data => {
            console.log(data);
            setOrders(data);  // Set the parsed data to state or use it as needed
          })
          .catch(error => {
            console.error('Error fetching orders:', error);
          });
      };
    useEffect(()=>{
        apiFetch();
    },[]);

    return (
        <>
            <HomeButton/>
            <h5>This Component is for fetching data from other api !! </h5>
            {
                orders && orders.map((order)=>{
                    return <div key={order.name}>Movie Name: {order.name}</div>
                })
            }

        </>
    );
}

export default ApiDataFetch;