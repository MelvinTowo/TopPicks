import React from "react";
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

function SearchBar({placeholder, data}){
    const [filteredData, setFilteredData] = useState([]);
    return(
        <div className="search">
            <div className="searchInputs">
              <input type="text" placeholder={placeholder}/>
              <div className="searchIcon"> <SearchIcon  /> </div>
            
           
              
            </div>
        </div>
    )
}

export default SearchBar;

/*
** JS Script that iterates through data for tags **
-> Used for the search bar display results <-
<div className="dataResult">
    {data.map((value, key) =>{
                    return (
                    <a className="dataItem" href={value.link} target="_blank">
                        <p>{value.tag}</p>
                    </a>
                    );
                })}
</div>
 */