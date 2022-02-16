import { createContext } from "react";
import { Animals } from "../models/Animals";

interface FavoritesContext {
    dogs: Animals[];
    addFavorite: (dog: Animals) => void;
    removeFavorite: (id: number) => void;
}

const defaultValue: FavoritesContext = {
    dogs: [],
    addFavorite: () => {},
    removeFavorite: () => {}
}

const FavoritesContext = createContext<FavoritesContext>(defaultValue);
export default FavoritesContext;