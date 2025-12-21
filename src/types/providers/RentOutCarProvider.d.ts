import { ImageSourcePropType } from "react-native";

export type CarModel = {
  id: string;
  name: string;
  image: ImageSourcePropType;
};

export type CarBrand = {
  id: string;
  name: string;
  isLuxury: boolean;
  models: CarModel[];
};

export interface IRentOutCarProvider {
  CarsBrands?: CarBrand;
}
