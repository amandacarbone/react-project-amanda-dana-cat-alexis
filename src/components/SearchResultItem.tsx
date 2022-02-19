import { Link } from "react-router-dom";
import { Animals } from "../models/Animals";
import "../styles/SearchResultItem.css"

//child of SearchResults

interface AnimalsProp {
    dog: Animals
}

export function SearchResultItem({ dog }: AnimalsProp) {

  

    return (

        <Link to = {`/profile/${dog.id}`}>
        <div className="searchedDogComponent">

            <div className="searchedDog">

               
                    <img className="searchedDogPic"
                        src={
                            dog?.primary_photo_cropped?.small &&
                            dog?.primary_photo_cropped?.medium &&
                            dog?.primary_photo_cropped?.large
                        }
                    />
                
                <div className = "searchedDogInfo">
                <div className="searchedDogName">
                    {dog.name}
                </div>

                <div className="searchedDogDetails">
                    <p>{dog.gender} | {dog.age} | {dog.size}</p>
                </div>
                </div>


            </div>

        </div>
        </Link>
    )
}