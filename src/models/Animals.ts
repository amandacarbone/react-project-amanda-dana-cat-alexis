export interface Animals {
  id: number;
  type: string;
  age: string;
  gender: string;
  size: string;
  attributes: {
    spayed_neutered: boolean;
    shots_current: boolean;
  };
  environment: {
    children: boolean;
  };
  name: string;
  description: string;
  primary_photo_cropped: {
    small: string;
    medium: string;
    large: string;
    full: string;
  };
  url: string;
}
