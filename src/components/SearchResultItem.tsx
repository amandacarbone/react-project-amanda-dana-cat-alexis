import { Animals } from "../models/Animals";
import "../styles/SearchResultItem.css"

//child of SearchResults

interface AnimalsProp {
    dog: Animals
}

export function SearchResultItem({ dog }: AnimalsProp) {

    return (
        <div>

            <div className="searchedDog">
                <div className="searchedDogName">
                    {dog.name}
                </div>

                <div >
                    <img className="searchedDogPic"
                        src={
                            dog?.primary_photo_cropped?.small &&
                            dog?.primary_photo_cropped?.medium &&
                            dog?.primary_photo_cropped?.large
                        }
                    />
                </div>
            </div>

        </div>
    )
}