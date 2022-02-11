import { useEffect, useState } from "react"
import { getAnimalsByType, login } from "../services/PetfinderApi";

export function Details(){

    const [dogs, setDogs] = useState<any[]>([]);

    useEffect(() => {

        getAnimalsByType("dog").then(data => {
            setDogs(data.animals)
            return data.animals})

    }, [])

    return(
        <div>
            <ul>
            {dogs.map((dog) =>
            <li key={dog.id}>{dog.name}
            <img src={dog.photos[0]?.large}/>
            </li>)}
            </ul>
        </div>
    )
}