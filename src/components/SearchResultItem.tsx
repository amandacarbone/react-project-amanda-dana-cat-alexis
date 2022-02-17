import { Animals } from "../models/Animals";


//child of SearchResults

interface AnimalsProp {
    animal: Animals
}

export function SearchResultItem({animal}: AnimalsProp){

return(
    <div>
        {animal.name}
    </div>
)
}