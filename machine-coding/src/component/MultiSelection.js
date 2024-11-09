import { useState } from "react";
import HomeButton from "../MainPage/HomeButton";
const MultiSelection = () =>{
    const countryCities = {
        India: ['Mumbai', 'Delhi', 'Bangalore'],
        Australia: ['Sydney', 'Melbourne', 'Brisbane'],
        USA: ['New York', 'Los Angeles', 'Chicago'],
    };

    const [country, setCountry] = useState('');
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState('');

    const handleCountryChange = (event)=>{
        const selectedCountry = event.target.value;
        setCountry(selectedCountry);
        setCities(countryCities[selectedCountry] || []);
        setCity("");
    }

    const handleCityChange = (event)=>{
        const selectedCity = event.target.value;
        setCity(selectedCity);
    }
    
    return (<>
        <HomeButton/>
        <h5> Select from Country</h5>
        <select value={country} onChange={handleCountryChange}>
            <option value="">Select Country</option>
            {Object.keys(countryCities).map((countryName)=>(
                <option key={countryName} value={countryName}>{countryName}</option>
            ))}
        </select>

        {country && (
            <>
                <h5>Select City</h5>
                <select value={city} onChange={handleCityChange}>
                    <option value="">Select City</option>
                    {cities.map((cityName)=>(
                        <option key={cityName} value={cityName}>{cityName}</option>
                    ))}
                </select>
            </>
        )}
        {country && city && (
            <p>
                Selected Country: {country} and Selected City: {city}
            </p>
        )}
    </>);
}

export default MultiSelection;