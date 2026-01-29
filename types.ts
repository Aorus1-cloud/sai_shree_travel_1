
export interface Vehicle {
  id: string;
  name: string;
  image: string;
  seats: string;
  luggage: string;
  fuel: string;
  transmission: string;
  pricePerKm: string;
  type: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}
