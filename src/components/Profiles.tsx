import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FavoritesContext from "../contexts/FavoritesContext";
import { Animals } from "../models/Animals";
import { getAnimalsByType } from "../services/PetfinderApi";
import { ProfileItem } from "./ProfileItem";

export function Profiles() {
  
  const { favoriteDogs } = useContext(FavoritesContext);
  const [dogs, setDogs] = useState<Animals[]>([]);
  const [selectedDogIndex, setSelectedDogIndex] = useState(0);
  const [selectedDog, setSelectedDog] = useState<any>();
  const id: number | undefined = parseInt(useParams().id!) || undefined;
  console.log(id)

  useEffect(() => {
    getAnimalsByType("dog").then((newDogs: Animals[]) => {
      setDogs(newDogs);
      if (id) {
        const foundDog = newDogs.find((dog)=>dog.id===id)
        setSelectedDog(foundDog)
        
      }else{
      setSelectedDog(newDogs[0])
      
      }
    });

    if (dogs && dogs[0]) {
      setSelectedDogIndex(0);
      setSelectedDog(dogs[0]);
    }

    
  }, []);

  const handleRightClick = () => {
    if (dogs && dogs.length > 0) {
      let newIndex = selectedDogIndex + 1;
      console.log(newIndex, dogs.length);
      if (newIndex >= dogs.length) {
        newIndex = 0;
      }
      setSelectedDogIndex(newIndex);
      console.log("after setSelected", newIndex);
      setSelectedDog(dogs[newIndex]);
      console.log(selectedDogIndex);
    }
  };

  const handleLeftClick = () => {
    if (dogs && dogs.length > 0) {
      let newIndex = selectedDogIndex - 1;
      if (newIndex < 0) {
        newIndex = dogs.length - 1;
      }
      setSelectedDogIndex(newIndex);
      setSelectedDog(dogs[newIndex]);
      console.log(selectedDogIndex);
    }
  };

  return (
    <div>
        <ProfileItem dog={selectedDog} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick}></ProfileItem>
    </div>
  );
}
