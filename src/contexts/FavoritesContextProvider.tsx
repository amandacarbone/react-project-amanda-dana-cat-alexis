import { ReactNode, useState } from "react";
import { Animals } from "../models/Animals";
import FavoritesContext from "./FavoritesContext";
import { toast } from "react-toastify";

export function FavoritesContextProvider(props: { children: ReactNode }) {

  const [favoriteDogs, setFavoriteDogs] = useState<Animals[]>([]);

  const favoriteAdded = () => toast.success("Favorite Added", {
    position: "top-right",
    autoClose: 900,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

  const favoriteRemoved = () => toast.error("Favorite Removed", {
    position: "top-right",
    autoClose: 900,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

  function addFavorite(favoriteDog: Animals) {
    if (
      !favoriteDogs.some((addedDog: Animals): boolean => {
        return addedDog.id === favoriteDog.id
      })) {
      setFavoriteDogs((prev) => [...prev, favoriteDog]);
      favoriteAdded();
    }
  }

  function removeFavorite(id: number) {
    setFavoriteDogs(favoriteDogs.filter((f) => f.id != id));
    favoriteRemoved();
  }

  return (
    <div>
      <FavoritesContext.Provider
        value={{ favoriteDogs, addFavorite, removeFavorite }}
      >
        {props.children}
      </FavoritesContext.Provider>
    </div>
  );
}
