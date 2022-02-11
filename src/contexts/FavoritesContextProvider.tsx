import { ReactNode, useState } from "react";
// import FavoritesContext from "./FavoritesContext";

// export function FavoritesContextProvider(props: { children: ReactNode }){

//     const [favorites, setFavorites] = useState<Pet[]>([]);

//     function addPet(pet: Pet) {
//         setFavorites([...pets, pet]);
//     }

//     function removePet(id: string) {
//         setFavorites(favorites.filter(f => f.id != id));
//     }

//     return(
//         <FavoritesContext.Provider value={{favorites, addPet, removePet}}>
//             {props.children}
//         </FavoritesContext.Provider>
//     );
// }