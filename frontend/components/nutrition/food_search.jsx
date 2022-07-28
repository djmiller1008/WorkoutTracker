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
            <section>
                <input onChange={handleInput} type="text"></input>
            </section>
        </div>
    )

};

export default FoodSearch;