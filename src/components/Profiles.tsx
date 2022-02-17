import { useContext } from "react";
import FavoritesContext from "../contexts/FavoritesContext";
import { ProfileItem } from "./ProfileItem";

export function Profiles() {

  const { favoriteDogs } = useContext(FavoritesContext);

  return (
    <div>
        {favoriteDogs.map(dog =>
          <ProfileItem key={dog.id} dog={dog}></ProfileItem>)}
    </div>
  );
}
