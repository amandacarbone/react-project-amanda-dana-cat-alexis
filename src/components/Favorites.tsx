import { useContext } from "react"
import FavoritesContext from "../contexts/FavoritesContext"

export function Favorites(){

    const { dogs, removeFavorite } = useContext(FavoritesContext);

    function showRemoveButton() {
        
    }

    return(
        <div>
            
            <h2>Favorites</h2>

            <ul>
            {dogs.map(dog => {
                <li key={dog.id}>
                    {dog.name}
                </li>
            })}
            </ul>

        </div>
    )
}