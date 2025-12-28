export type Notification = {
  id: string;
  title: string;
  containt: string;
  icon?: string;
  isRead: boolean;
};

export interface IAppProviders {
  AppName: string;
  notifications: Notification[];
  DeleteNotifications: (ids: string[]) => void;
  toggleFavoriteCar: (id: string) => void;
  favCar: string[];
  isFav: (id: string) => boolean;
  markNotifAsRead: (id: string) => void;
}
