import { useContext } from "react";
import FavoritesContext from "../contexts/FavoritesContext";

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
    <div>
      <h2>Favorites</h2>

        {favoriteDogs.map((dog) => (
          <ul key={dog.id}>
          <li>{dog.name}</li>
          <li><img src={
            dog?.primary_photo_cropped?.small &&
            dog?.primary_photo_cropped?.medium &&
            dog?.primary_photo_cropped?.large}/>
          </li>
          <button className={showRemoveButton() === true ? "material-icons" : "hide"} 
                  onClick={() => removeFavorite(dog.id)}>cancel</button>
          </ul>
        ))}
    </div>
  );
}
