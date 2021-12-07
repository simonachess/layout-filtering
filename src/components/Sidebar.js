import React from "react";
import data from '../data/data'

function Sidebar({ handleClick }) {

    return (
        <div>
            {data.map(i => {
                return (
                    <div className="sidebar-item" key={i.id} onClick={(e) => handleClick(i.id)}>{i.title}</div>
                )
            })}
        </div>
    )
}

export default Sidebar;