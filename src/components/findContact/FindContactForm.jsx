import React from "react";

export const FindContactForm = ({onChangeFind}) => {
    console.log(onChangeFind());
    return (
        <>
        <h3>Find contacts by name</h3>
        <input type = "text" onChange={onChangeFind}/>
        </>
    )
}