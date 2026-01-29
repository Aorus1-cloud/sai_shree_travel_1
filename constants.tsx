
import React from 'react';
import { Car, Plane, MapPin, Package, Clock, Shield, Award, ThumbsUp } from 'lucide-react';
import { Vehicle, Service, Destination, Testimonial } from './types';

export const VEHICLES: Vehicle[] = [
  {
    id: '1',
    name: 'Swift Dzire',
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=800&auto=format&fit=crop',
    seats: '4+1',
    luggage: '2 Bags',
    fuel: 'Petrol/CNG',
    transmission: 'Manual',
    pricePerKm: '₹11',
    type: 'Sedan'
  },
  {
    id: '2',
    name: 'Ertiga',
    image: 'https://images.unsplash.com/photo-1623940424346-601f01697f26?q=80&w=800&auto=format&fit=crop',
    seats: '6+1',
    luggage: '3 Bags',
    fuel: 'Petrol/CNG',
    transmission: 'Manual',
    pricePerKm: '₹13',
    type: 'MUV'
  },
  {
    id: '3',
    name: 'Hyundai Aura',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop',
    seats: '4+1',
    luggage: '2 Bags',
    fuel: 'Petrol',
    transmission: 'Manual',
    pricePerKm: '₹11',
    type: 'Sedan'
  },
  {
    id: '4',
    name: 'Innova Crysta',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop',
    seats: '7+1',
    luggage: '4 Bags',
    fuel: 'Diesel',
    transmission: 'Manual/Auto',
    pricePerKm: '₹18',
    type: 'Premium MUV'
  },
  {
    id: '5',
    name: 'Tempo Traveller',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
    seats: '12-17',
    luggage: '10 Bags',
    fuel: 'Diesel',
    transmission: 'Manual',
    pricePerKm: '₹25',
    type: 'Mini Bus'
  }
];

export const SERVICES: Service[] = [
  { id: '1', title: 'Local Cab', description: 'Quick and reliable city transfers across Nashik.', icon: 'Car' },
  { id: '2', title: 'Airport Transfers', description: 'Punctual pick-ups and drops for Mumbai & Pune airports.', icon: 'Plane' },
  { id: '3', title: 'Outstation Trips', description: 'Explore Maharashtra with our experienced drivers.', icon: 'MapPin' },
  { id: '4', title: 'Tour Packages', description: 'Customized packages for Shirdi, Trimbakeshwar, and more.', icon: 'Package' },
  { id: '5', title: 'Car Rentals', description: 'Flexible daily and hourly rental options.', icon: 'Clock' }
];

export const DESTINATIONS: Destination[] = [
  { id: '1', name: 'Trimbakeshwar', image: 'https://images.unsplash.com/photo-1626294246830-47963d2319f3?q=80&w=800&auto=format&fit=crop', description: 'One of the 12 Jyotirlingas, a sacred pilgrimage site.' },
  { id: '2', name: 'Shirdi', image: 'https://images.unsplash.com/photo-1620067925053-380d603a110a?q=80&w=800&auto=format&fit=crop', description: 'The home of Sai Baba, drawing millions of devotees yearly.' },
  { id: '3', name: 'Mumbai', image: 'https://images.unsplash.com/photo-1570160897040-30430ade2211?q=80&w=800&auto=format&fit=crop', description: 'The bustling financial capital of India.' },
  { id: '4', name: 'Pune', image: 'https://images.unsplash.com/photo-1582650809055-7f938f325990?q=80&w=800&auto=format&fit=crop', description: 'The cultural hub and IT capital of Maharashtra.' },
  { id: '5', name: 'Panchgani', image: 'https://images.unsplash.com/photo-1594913785162-e6785633842c?q=80&w=800&auto=format&fit=crop', description: 'Beautiful hill station known for its scenic views.' }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Rahul Sharma', role: 'Business Traveler', content: 'Extremely punctual and professional. The car was clean and the driver was very polite. Best service in Nashik.', rating: 5, avatar: 'https://picsum.photos/seed/rahul/100/100' },
  { id: '2', name: 'Priya Deshmukh', role: 'Family Trip', content: 'We booked an Innova for a trip to Shirdi. It was a very comfortable journey. Highly recommended for family tours.', rating: 5, avatar: 'https://picsum.photos/seed/priya/100/100' },
  { id: '3', name: 'Amit Patil', role: 'Regular Customer', content: 'I have been using Saishree Tours for 2 years now. Consistency in quality is what makes them different.', rating: 5, avatar: 'https://picsum.photos/seed/amit/100/100' }
];

export const WHY_CHOOSE_US = [
  { id: '1', title: '8+ Years Experience', description: 'Providing reliable travel solutions since 2016.', icon: <Award className="w-6 h-6" /> },
  { id: '2', title: 'Safe & Comfortable', description: 'Well-maintained fleet for a stress-free experience.', icon: <Shield className="w-6 h-6" /> },
  { id: '3', title: 'Punctual Service', description: 'We strictly follow schedules to save your valuable time.', icon: <Clock className="w-6 h-6" /> },
  { id: '4', title: 'Professional Drivers', description: 'Experienced and courteous drivers for your safety.', icon: <ThumbsUp className="w-6 h-6" /> }
];
