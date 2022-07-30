import React, { useState } from "react";
import DashNavLink from "../dashboard/dashnavlink"

const FoodSearch = () => {
    const [searchParam, setSearchParam] = useState("");

    const handleInput = event => {
        setSearchParam(event.target.value);
    }
    
    return (
        <div>
            <DashNavLink />
            <section className="food-search-section">
                <h2>Search for a food</h2>
                <input className="food-search-bar" onChange={handleInput} type="text"></input>
            </section>
        </div>
    )

};

export default FoodSearch;