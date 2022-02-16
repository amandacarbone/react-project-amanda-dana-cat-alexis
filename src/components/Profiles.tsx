import { useContext } from "react";
import FavoritesContext from "../contexts/FavoritesContext";
import { ProfileItem } from "./ProfileItem";

export function Profiles() {

    const { dogs } = useContext(FavoritesContext);

  return (
    <div>
        <ProfileItem></ProfileItem>
    </div>
  );
}
