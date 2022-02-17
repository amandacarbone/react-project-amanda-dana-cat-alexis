import { createContext } from "react";
import { Animals } from "../models/Animals";

interface FavoritesContext {
    favoriteDogs: Animals[];
    addFavorite: (favoriteDog: Animals) => void;
    removeFavorite: (id: number) => void;
}

const defaultValue: FavoritesContext = {
    favoriteDogs: [],
    addFavorite: () => {},
    removeFavorite: () => {}
}

const FavoritesContext = createContext<FavoritesContext>(defaultValue);
export default FavoritesContext;