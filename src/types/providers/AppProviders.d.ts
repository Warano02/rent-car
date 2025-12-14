export type Notification = {
  title: string;
  containt: string;
  icon?: string;
  isRead:boolean
};

export interface IAppProviders {
  AppName: string;
  notifications: Notification[];
}
