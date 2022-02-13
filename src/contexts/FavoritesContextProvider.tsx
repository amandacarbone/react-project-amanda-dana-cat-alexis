import { ReactNode, useState } from "react";
import { Animals } from "../models/Animals";
import FavoritesContext from "./FavoritesContext";

export function FavoritesContextProvider(props: { children: ReactNode }){

    const [favoriteDogs, setFavoriteDogs] = useState<Animals[]>([]);

    function addFavorite(dog: Animals) {
        setFavoriteDogs([...favoriteDogs, dog]);
    }

    function removeFavorite(id: number) {
        setFavoriteDogs(favoriteDogs.filter(f => f.id != id));
    }

    return(
        <div>

        <FavoritesContext.Provider value={{favoriteDogs, addFavorite, removeFavorite}}>
            {props.children}
        </FavoritesContext.Provider>

        </div>
    )
}

