import { Animals } from "../models/Animals";


//child of SearchResults

interface AnimalsProp {
    dog: Animals
}

export function SearchResultItem({dog}: AnimalsProp){

return(
    <div>
        {dog.name}  
        {dog.type}
        <img
          src={
            dog?.primary_photo_cropped?.small &&
            dog?.primary_photo_cropped?.medium &&
            dog?.primary_photo_cropped?.large
          }
        />
    </div>
)
}