import { useContext, useEffect, useState } from "react"
import FavoritesContext from "../contexts/FavoritesContext";
import { Animals } from "../models/Animals";
import { getAnimalsByType, login } from "../services/PetfinderApi";
import { Favorites } from "./Favorites";

export function Profiles() {

    const [dogs, setDogs] = useState<Animals[]>([]);

    const { addFavorite } = useContext(FavoritesContext);

    useEffect(() => {

        getAnimalsByType("dog").then(data => {
            setDogs(data.animals)
            return data.animals})

    }, [])

    return(
        <div>
           
            <ul>
            {dogs.map(dog =>
            <li key={dog.id}>{dog.name}
            <img src={dog.primary_photo_cropped?.small && dog.primary_photo_cropped?.medium && dog.primary_photo_cropped?.large}/>
            <button onClick={() => addFavorite(dog)}>Add Favorite</button>
            </li>)}
            </ul>
           
        </div>
    )
}