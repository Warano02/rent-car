/** Where user wanna go with the car */
export type TLocation = {
  label: string;
  lat: number;
  long: number;
};

/**
 * Period of booking
 */
export type TBookingDates = {
  startDate: string;
  endDate: string;
};

export interface ICarBooking {
  location?: TLocation;
  setLocation: (location: TLocation) => void;
  date: TBookingDates;
  setDate: (d: TBookingDates) => void;
}
