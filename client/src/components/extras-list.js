import React, { useState, useEffect } from "react";
import API from "../routes/api";

const ExtrasList = (props) => {
    const [extras, setExtras] = useState([]);

    useEffect(() => {
        loadCategories()
    }, [])

    const loadCategories = () => {
        API.allExtras()
        .then(res => setExtras(res.data))
        .catch(err => console.log(err));
    };

    const extrasList = extras.map((extrasObj, index) => {
        return (
            <label htmlFor={extrasObj.title} key={index}>
                {extrasObj.title} : ${extrasObj.price}
                <input type="checkbox" id={extrasObj.title} data-price={extrasObj.price} />
            </label>
        )
    });

    return(
        <>
            <h3>Extras</h3>
            <div className="product-extras-list">
                {extrasList}
            </div>
        </>
    )
}

export default ExtrasList
