import { useContext } from "react";
import FavoritesContext from "../contexts/FavoritesContext";
import "../styles/Favorites.css";

export function Favorites() {

  const { favoriteDogs, removeFavorite } = useContext(FavoritesContext);

  function showRemoveButton() {
    let foundItem = favoriteDogs.find((dog) => dog.id)
    if(foundItem) {
        return true;
    } else {
        return false;
    }
}

  return (
    <div className="favoritesContainer">

      <h2>Favorites</h2>

      <div className="favoritesItem">

      {favoriteDogs.map((dog) => (
        <ul key={dog.id}>
        <li><img src={
          dog?.primary_photo_cropped?.small &&
          dog?.primary_photo_cropped?.medium &&
          dog?.primary_photo_cropped?.large}/>
        </li>
        <li><h3>{dog.name}</h3></li>
        <button className={showRemoveButton() === true ? "material-icons" : "hide"} 
                onClick={() => removeFavorite(dog.id)}>cancel</button>
        </ul>
      ))}

      </div>
    </div>
  );
}
