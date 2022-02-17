import React, { useState } from "react";
import { SearchResults } from "./SearchResults";

//parent of SearchResults

export function SearchDropDown() {

   const [gender, setGender] = useState("")
   const [age, setAge] = useState("")
   const [size, setSize] = useState("")
   



    return (
        <div>

            <h1>Search Filters</h1>

            <select onChange={(event)=>{setGender(event.target.value)}}>
                <option selected>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <select onChange={(event)=>{setSize(event.target.value)}}>
                <option selected>Size</option>
                <option value="small">Small 0-25 lb</option>
                <option value="medium">Medium 26-60 lb</option>
                <option value="large">Large 61-100 lb</option>
                <option value="extra-large">Extra-Large 101+ lb</option>
            </select>

            <select onChange={(event)=>{setAge(event.target.value)}} >
                <option selected>Age</option>
                <option value="young">Young</option>
                <option value="adult">Adult</option>
                <option value="senior">Senior</option>
            </select>
    {/*
            <select onChange={()=>{}}>
                <option selected>Spay/Neutered</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            * */}
        
            <h2>Results</h2>

          <SearchResults gender = {gender} age = {age} size = {size} ></SearchResults> 


        </div>
    )
}