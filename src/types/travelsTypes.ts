export type TTravelsFormInput = {
  searchTerm: string;
  travelType: string;
  startDate: string;
  endDate: string;
};

export type TTrip = {
  id: string;
  userId: string;
  destination: string;
  description: string;
  travelType: string;
  activities: string[];
  itinerary: string[];
  imageLinks: string[];
  startDate: string;
  endDate: string;
  budget: number;
};

export type TUpdateTrip = {
  tripId: string;
  destination?: string;
  description?: string;
  activities?: string[];
  travelType?: string;
  itinerary?: string[];
  imageLinks?: string[];
  startDate?: string;
  endDate?: string;
  budget?: number;
};
