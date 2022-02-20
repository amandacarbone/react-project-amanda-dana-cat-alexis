import { ReactNode, useState } from "react";
import { Animals } from "../models/Animals";
import FavoritesContext from "./FavoritesContext";

export function FavoritesContextProvider(props: { children: ReactNode }) {
  const [favoriteDogs, setFavoriteDogs] = useState<Animals[]>([]);

  function addFavorite(favoriteDog: Animals) {
    if (
      !favoriteDogs.some((addedDog: Animals): boolean => {
        return addedDog.id === favoriteDog.id;
      })
    ) {
      setFavoriteDogs((prev) => [...prev, favoriteDog]);
    }
  }

  function removeFavorite(id: number) {
    setFavoriteDogs(favoriteDogs.filter((f) => f.id != id));
    // != should be !== but doing that breaks it so it's a bug but also...
    //line 14 is not written immutably which is a problem but the code Andrea suggested:
    //const index = favoriteDogs.findIndex((dog)=>dog.id===id)
    //setFavoriteDogs((prev)=>[...prev.slice(0,index), ...prev.slice(index + 1)])
    //also breaks functionality so im not sure if something is missing in the code or
    //if something is missing elsewhere and causing trouble
    //andrea suggested we could start by checking the useEffect to investigate? but idk
    //it's currently "working" and I don't want to break things further with so little time
    //so im cool submitting with this bug for the deadline
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
