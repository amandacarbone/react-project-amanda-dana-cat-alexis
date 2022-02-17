import { useContext } from "react";
import FavoritesContext from "../contexts/FavoritesContext";
import { ProfileItem } from "./ProfileItem";

export function Favorites() {
  const { favoriteDogs, removeFavorite } = useContext(FavoritesContext);

  function showRemoveButton() {}

  return (
    <div>
      <h2>Favorites</h2>

      <ul>
        {favoriteDogs.map((dog) => (
          <ProfileItem key={dog.id} dog={dog}></ProfileItem>
        ))}
      </ul>
    </div>
  );
}
