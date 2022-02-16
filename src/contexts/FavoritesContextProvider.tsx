import { ReactNode, useState } from "react";
import { Animals } from "../models/Animals";
import FavoritesContext from "./FavoritesContext";

export function FavoritesContextProvider(props: { children: ReactNode }){

    const [dogs, setFavoriteDogs] = useState<Animals[]>([]);

    function addFavorite(dog: Animals) {
        setFavoriteDogs([...dogs, dog]);
    }

    function removeFavorite(id: number) {
        setFavoriteDogs(dogs.filter(d => d.id != id));
    }

    return(
        <div>

        <FavoritesContext.Provider value={{dogs, addFavorite, removeFavorite}}>
            {props.children}
        </FavoritesContext.Provider>

        </div>
    )
}

