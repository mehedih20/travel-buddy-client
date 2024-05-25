export type TFormInput = {
  searchTerm: string;
  startDate: string;
  endDate: string;
};

export type TTrip = {
  id: string;
  userId: string;
  destination: string;
  description: string;
  activities: string[];
  travelType: string;
  imageLinks: string[];
  startDate: string;
  endDate: string;
  budget: number;
};
