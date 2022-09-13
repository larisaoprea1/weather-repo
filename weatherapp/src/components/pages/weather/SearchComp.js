import { AsyncPaginate } from 'react-select-async-paginate';
import { useState } from "react";
import "./MainPageCSS.css"

const SearchComp = ({onSearchCity}) => {
    
    const [city, setCity] = useState("");
    const handleSearch= (searchCity) =>{
       setCity(searchCity);
       onSearchCity(searchCity);
    }
    const loadOptions = async (citySearched, callback) =>{
        if (citySearched.length > 1) {
        const data = fetch(`http://api.weatherapi.com/v1/search.json?key=f3ccb1cf28744fea8bd143806223107&q=${citySearched}`)
        .then( res => res.json())
        .then( res => {
            return {options: res.map(element => {
                return {
                    value: element.name,
                    label: `${element.name} ${element.country}`
                };
            }),
        }
        })
        .catch(err => console.log(err));
        return data;
    }else{
        callback(null);
    }
    }
    return( <AsyncPaginate
    placeholder="Search for a city"
    value={city}
    debounceTimeout={600}
    onChange={ handleSearch}
    loadOptions={loadOptions}
    className="searchbar"
    style = {{padding: '0px'}}
    />)
}
export default SearchComp;