import { useEffect, useState } from "react"
import { Animals } from "../models/Animals";
import { getSearchedDogs } from "../services/PetfinderApi";
import { SearchResultItem } from "./SearchResultItem";

//parent of SearchResultItem
//child of SearchForm

interface SearchProps {
    gender: string,
    age: string, 
    size: string,
   // attributes: {
   //     spayed_neutered: boolean
   // }
}

export function SearchResults({gender, age, size}: SearchProps){

    const [searchedDogs, setSearchedDogs] = useState<Animals[]>([])

    useEffect(() => {

       getSearchedDogs(gender, size, age).then(data => {
            setSearchedDogs(data);
        })

    }, [gender, age, size])


    return(
        <div>
             {searchedDogs.map((dog)=> <SearchResultItem dog={dog} key = {dog.id} />)}
           
        </div>
    )
}