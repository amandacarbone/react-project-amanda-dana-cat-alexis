import { useContext, useEffect, useState } from "react";
import FavoritesContext from "../contexts/FavoritesContext";
import { Animals } from "../models/Animals";
import "../styles/Profiles.css";

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
    <div className="carouselContainer">
      <h2 className="name" key={dog?.id}>{dog?.name}</h2>
      <div className="selectedImage">
        <img src={
            dog?.primary_photo_cropped?.small &&
            dog?.primary_photo_cropped?.medium &&
            dog?.primary_photo_cropped?.large
          }/>
        <div className="carouselNav">
          <button className="material-icons" onClick={props.handleLeftClick}>
            arrow_back_ios
          </button>
          <button className="material-icons" onClick={() => addFavorite(dog)}>
            favorite
          </button>
          <button className="material-icons" onClick={props.handleRightClick}>
            arrow_forward_ios
          </button>
        </div>
        <div className="detailsContainer">
          <div className="details">
            <h3>Details</h3>
            <p>Age: {dog?.age}</p>
            <p>Size: {dog?.size}</p>
            <p>Gender: {dog?.gender}</p>
            <p>Fixed: {dog?.attributes.spayed_neutered ? "Yes" : "No"}</p>
            <p>Shots Current: {dog?.attributes.shots_current ? "Yes" : "No"}</p>
            <p>Good With Children: {dog?.environment.children ? "Yes" : "No"}</p>
          </div>
          <div className="description">
            <h3>About</h3>
            <p>{dog?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
