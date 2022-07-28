import React, { useState } from "react";


const FoodSearch = () => {
    const [searchParam, setSearchParam] = useState("");

    const handleInput = event => {
        setSearchParam(event.target.value);
    }
    
    return (
        <div>
            <section>
                <input onChange={handleInput} type="text"></input>
            </section>
        </div>
    )

};

export default FoodSearch;