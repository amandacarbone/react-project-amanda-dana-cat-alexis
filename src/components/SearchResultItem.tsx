import { Link } from "react-router-dom";
import { Animals } from "../models/Animals";
import "../styles/SearchResultItem.css";

//child of SearchResults

interface AnimalsProp {
  dog: Animals;
}

export function SearchResultItem({ dog }: AnimalsProp) {
  const styles = {
    Link: {
      textDecoration: "none",
    },
    searchedDogName: {
      fontSize:
        dog.name.length < 8 ? "30px" : dog.name.length < 12 ? "20px" : "15px",
    },
  };
  return (
    <Link to={`/profile/${dog.id}`} style={styles.Link}>
      <div className="searchedDogComponent">
        <div className="searchedDog">
          <img
            className="searchedDogPic"
            src={
              dog?.primary_photo_cropped?.small &&
              dog?.primary_photo_cropped?.medium &&
              dog?.primary_photo_cropped?.large
            }
          />

          <div className="searchedDogInfo">
            <div style={styles.searchedDogName} className="searchedDogName">
              {dog.name}
            </div>

            <div className="searchedDogDetails">
              <p>
                {dog.gender} | {dog.age} | {dog.size}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
