/** Where user wanna go with the car */
export type TLocation = {
  label: string;
  lat: number;
  long: number;
};
export interface ICarBooking {
  location?: TLocation;
  setLocation: (location: TLocation) => void;
}
