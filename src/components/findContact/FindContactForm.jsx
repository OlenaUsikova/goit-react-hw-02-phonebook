import React from "react";

export const FindContactForm = (onChangeFind) => {
    return (
        <>
        <h3>Find contacts by name</h3>
        <input type = "text" onChange={ev => onChangeFind(ev.target.value)}/>
        </>
    )
}