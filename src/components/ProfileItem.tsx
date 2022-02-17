import { useContext, useEffect, useState } from "react";
import FavoritesContext from "../contexts/FavoritesContext";
import { Animals } from "../models/Animals";
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

  return (
    <div className="carousel-container">
      <h2 className="name">{dog?.name}</h2>
      <div className="selected-image">
        <img src={
            dog?.primary_photo_cropped?.small &&
            dog?.primary_photo_cropped?.medium &&
            dog?.primary_photo_cropped?.large
          }/>
        <div className="doggyDetails" key={dog?.id}>
          <p>Age: {dog?.age}</p>
          <p>Size: {dog?.size}</p>
          <p>Gender: {dog?.gender}</p>
          <p>Fixed: {dog?.attributes.spayed_neutered ? "Yes" : "No"}</p>
          <p>Shots Current: {dog?.attributes.shots_current ? "Yes" : "No"}</p>
          <p>Good With Children: {dog?.environment.children ? "Yes" : "No"}</p>
          <p>Description: {dog?.description}</p>
        </div>
        <div className="carousel">
          <button className="button-left" onClick={props.handleLeftClick}>
            Prev
          </button>
          <button className="button-right" onClick={props.handleRightClick}>
            Next
          </button>
          <button onClick={() => addFavorite(props.dog)}>Add to Favorites</button>
        </div>
      </div>
    </div>
  );
}
