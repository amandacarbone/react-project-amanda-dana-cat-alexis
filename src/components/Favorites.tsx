import { useContext } from "react";
import FavoritesContext from "../contexts/FavoritesContext";
import { FavoritesItem } from "./FavoritesItem";
import { ProfileItem } from "./ProfileItem";

export function Favorites() {

  const { favoriteDogs, removeFavorite } = useContext(FavoritesContext);

  function showRemoveButton() {}

  return (
    <div>
      <h2>Favorites</h2>

      {/* {favoriteDogs.map((dog) => {
        <ul key={dog.id}>
          <li>{dog.name}</li>
        </ul>
      })} */}

      <ul>
        {favoriteDogs.map((dog) => (
          <ProfileItem 
          handleRightClick={() =>  {}} 
          handleLeftClick={() =>  {}} 
          key={dog.id} 
          dog={dog}/>
        ))}
      </ul>
    </div>
  );
}
