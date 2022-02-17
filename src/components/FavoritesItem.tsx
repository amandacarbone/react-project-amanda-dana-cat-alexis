import { useContext } from "react";
import FavoritesContext from "../contexts/FavoritesContext";
import { Animals } from "../models/Animals";

interface FavoritesProps {
    dog: Animals;
}

export function FavoritesItem(props: FavoritesProps) {

    const { favoriteDogs } = useContext(FavoritesContext)

    return (
        <div>
            
        </div>
    );

}