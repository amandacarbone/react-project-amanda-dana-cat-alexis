import { useContext } from "react"
import FavoritesContext from "../contexts/FavoritesContext"

export function Favorites(){

    const { favoriteDogs, removeFavorite } = useContext(FavoritesContext);

    function showRemoveButton() {
        
    }

    return(
        <div>
            
            <h2>Favorites</h2>

            <ul>
            {favoriteDogs.map(favoriteDog => {
                <li key={favoriteDog.id}>
                    {favoriteDog.name}
                </li>
            })}
            </ul>

        </div>
    )
}