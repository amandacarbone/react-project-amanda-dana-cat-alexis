import { useContext, useEffect, useState } from "react";
import FavoritesContext from "../contexts/FavoritesContext";
import { Animals } from "../models/Animals";
import { getAnimalsByType } from "../services/PetfinderApi";
import "../App.css";

export function ProfileItem() {
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
        <div className="doggyDetails" key={selectedDog?.id}>
          <p>Age: {selectedDog?.age}</p>
          <p>Size: {selectedDog?.size}</p>
          <p>Gender: {selectedDog?.gender}</p>
          <p>
            Fixed: {selectedDog?.attributes.spayed_neutered ? "true" : "false"}
          </p>
          <p>
            Shots: {selectedDog?.attributes.shots_current ? "true" : "false"}
          </p>
          <p>
            Good With Children:{" "}
            {selectedDog?.environment.children ? "true" : "false"}
          </p>
          <p>Description: {selectedDog?.description}</p>
        </div>
        <div className="carousel">
          <button className="button-left" onClick={handleLeftClick}>
            Prev
          </button>
          <button className="button-right" onClick={handleRightClick}>
            Next
          </button>
          <button>Add to Favorites</button>
        </div>
      </div>
    </div>
  );
}
