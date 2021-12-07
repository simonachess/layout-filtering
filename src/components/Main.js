import React, { useState } from "react";
import data from '../data/data'

function Main({ selectedItemID, searchValue }) {

    const subcategory = data.find(category => {
        return category.id === selectedItemID
    })?.items;

    const [checkedSubcategory, setCheckedSubcategory] = useState([]);

    const handleChecked = (e, index) => {
        console.log(index)
        let checkedSubcategoryCopy = e.target.checked ? [...checkedSubcategory, index] : checkedSubcategory.filter(item => item !== index)
        console.log(checkedSubcategory)
        setCheckedSubcategory(checkedSubcategoryCopy);
        console.log(checkedSubcategoryCopy)
    }

    return (
        <div>
            {subcategory && subcategory.filter((i) => i.toLowerCase().includes(searchValue.toLowerCase())).map((i, index) => {
                let checkedSubcategoryState = checkedSubcategory.indexOf(index) !== -1
                return (

                    <p className="subcategory-item" key={i}>
                        <input type="checkbox"
                            checked={checkedSubcategoryState}
                            onChange={(e) => handleChecked(e, index)}>
                        </input>{i}
                    </p>

                )
            })}
        </div>
    )
}

export default Main;