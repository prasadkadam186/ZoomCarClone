export interface IResponceModel{
  message: string;
  result: boolean;
  data: ILocation[];
}

export interface ILocation{
    locationId: number;
      city: string;
      title: string;
      pincode: string;
}