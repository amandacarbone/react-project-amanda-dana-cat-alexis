import { useContext, useEffect, useRef, useState } from "react";
import FavoritesContext from "../contexts/FavoritesContext";
import { Animals } from "../models/Animals";
import { getAnimalsByType, login } from "../services/PetfinderApi";
import { Favorites } from "./Favorites";
import React from "react";
import { Dog } from "../models/Dog";

export function Profiles() {
  const [dogs, setDogs] = useState<Animals[]>([]);

  const { addFavorite } = useContext(FavoritesContext);

  const [selectedDogIndex, setSelectedDogIndex] = useState(0);
  const [selectedDog, setSelectedDog] = useState<Animals | null>(null);

  useEffect(() => {
    getAnimalsByType("dog").then((newDogs: Animals[]) => {
      console.log(newDogs);
      setDogs(newDogs);
      setSelectedDog(newDogs[0]);
      console.log(newDogs);
      //return data.animals;
    });

    if (dogs && dogs[0]) {
      setSelectedDogIndex(0);
      setSelectedDog(dogs[0]);
    }
  }, []);

  const handleRightClick = () => {
    if (dogs && dogs.length > 0) {
      let newIndex = selectedDogIndex + 1;
      if (newIndex >= dogs.length) {
        newIndex = 0;
      }
      setSelectedDogIndex(newIndex);
      setSelectedDog(dogs[selectedDogIndex]);
    }
  };

  const handleLeftClick = () => {
    if (dogs && dogs.length > 0) {
      let newIdx = selectedDogIndex - 1;
      if (newIdx < 0) {
        newIdx = dogs.length - 1;
      }
      setSelectedDogIndex(newIdx);
      setSelectedDog(dogs[selectedDogIndex]);
    }
  };

  return (
    <div className="carousel-container">
      <h2 className="name">{selectedDog?.name}</h2>
      <div className="selected-image">
        <img
          src={
            selectedDog?.primary_photo_cropped?.small &&
            selectedDog?.primary_photo_cropped?.medium &&
            selectedDog?.primary_photo_cropped?.large
          }
        />
        <div className="carousel">
          <button className="button-left" onClick={handleLeftClick}>
            Prev
          </button>
          <button className="button-right" onClick={handleRightClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
