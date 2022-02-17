import { useContext, useEffect, useState } from "react";
import FavoritesContext from "../contexts/FavoritesContext";
import { Animals } from "../models/Animals";
import { getAnimalsByType } from "../services/PetfinderApi";
import "../App.css";

interface Props {
  dog: Animals;
  handleRightClick: () => void;
  handleLeftClick: () => void;
}

export function ProfileItem(props: Props) {
  const { addFavorite } = useContext(FavoritesContext);

  const [dog, setDog] = useState(props.dog);

  useEffect(() => {
    setDog(props.dog);
  }, [props]);

  // useEffect(() => {
  //   getAnimalsByType("dog").then((newDogs: Animals[]) => {
  //     console.log(newDogs);
  //     setDogs(newDogs);
  //     setSelectedDog(newDogs[0]);
  //     console.log(newDogs);
  //   });

  //   if (dogs && dogs[0]) {
  //     setSelectedDogIndex(0);
  //     setSelectedDog(dogs[0]);
  //   }
  // }, []);

  const handleRightClick = () => {
    // if (dogs && dogs.length > 0) {
    //   let newIndex = selectedDogIndex + 1;
    //   console.log(newIndex, dogs.length);
    //   if (newIndex >= dogs.length) {
    //     newIndex = 0;
    //   }
    //   setSelectedDogIndex(newIndex);
    //   console.log("after setSelected", newIndex);
    //   setSelectedDog(dogs[newIndex]);
    //   console.log(selectedDogIndex);
    // }
  };

  const handleLeftClick = () => {
    // if (dogs && dogs.length > 0) {
    //   let newIndex = selectedDogIndex - 1;
    //   if (newIndex < 0) {
    //     newIndex = dogs.length - 1;
    //   }
    //   setSelectedDogIndex(newIndex);
    //   setSelectedDog(dogs[newIndex]);
    //   console.log(selectedDogIndex);
    // }
  };

  return (
    <div className="carousel-container">
      <h2 className="name">{dog?.name}</h2>
      <div className="selected-image">
        <img
          src={
            dog?.primary_photo_cropped?.small &&
            dog?.primary_photo_cropped?.medium &&
            dog?.primary_photo_cropped?.large
          }
        />
        <div className="doggyDetails" key={dog?.id}>
          <p>Age: {dog?.age}</p>
          <p>Size: {dog?.size}</p>
          <p>Gender: {dog?.gender}</p>
          <p>Fixed: {dog?.attributes.spayed_neutered ? "true" : "false"}</p>
          <p>Shots: {dog?.attributes.shots_current ? "true" : "false"}</p>
          <p>
            Good With Children: {dog?.environment.children ? "true" : "false"}
          </p>
          <p>Description: {dog?.description}</p>
        </div>
        <div className="carousel">
          <button className="button-left" onClick={handleLeftClick}>
            Prev
          </button>
          <button className="button-right" onClick={handleRightClick}>
            Next
          </button>
          <button onClick={() => addFavorite(dog)}>Add to Favorites</button>
        </div>
      </div>
    </div>
  );
}
