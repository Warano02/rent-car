import { ImageSourcePropType } from "react-native";
type C = {
  name: string;
  code: string;
};
type CarModelImage = {
  color: C;
  img: ImageSourcePropType;
};

export type CarModel = {
  id: string;
  name: string;
  images: CarModelImage[];
};

export type CarBrand = {
  id: string;
  name: string;
  type: "luxury" | "regular";
  models: CarModel[];
};

export interface ICar {
  brand?: string; //id  of brand selected
  model?: string; //id of the model
}

export interface IRentOutCarProvider {
  carsBrands: CarBrand[];
  car?: ICar;
}
