
import React from 'react';
import { Car, Plane, MapPin, Package, Clock, Shield, Award, ThumbsUp } from 'lucide-react';
import { Vehicle, Service, Destination, Testimonial } from './types';

export const VEHICLES: Vehicle[] = [
  {
    id: '1',
    name: 'Swift Dzire',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
    seats: '4+1',
    luggage: '2 Bags',
    fuel: 'Petrol/CNG',
    transmission: 'Manual',
    pricePerKm: '₹11',
    type: 'Sedan'
  },
  {
    id: '2',
    name: 'Maruti Ertiga',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&q=80&w=800',
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
  { id: '1', name: 'Trimbakeshwar', image: 'https://images.unsplash.com/photo-1621501659305-655b3f274640?auto=format&fit=crop&q=80&w=800', description: 'One of the 12 Jyotirlingas, a sacred pilgrimage site near Nashik.' },
  { id: '2', name: 'Shirdi', image: 'https://images.unsplash.com/photo-1544011501-a22271d42398?auto=format&fit=crop&q=80&w=800', description: 'The home of Sai Baba, drawing millions of devotees yearly.' },
  { id: '3', name: 'Mumbai', image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=800', description: 'The bustling financial capital of India and its Gateway.' },
  { id: '4', name: 'Pune', image: 'https://images.unsplash.com/photo-1574482620826-40685ca5826c?auto=format&fit=crop&q=80&w=800', description: 'The cultural hub and historic seat of the Peshwas.' },
  { id: '5', name: 'Panchgani', image: 'https://images.unsplash.com/photo-1625505826533-5c80aca7d157?auto=format&fit=crop&q=80&w=800', description: 'Beautiful hill station known for its scenic views and berries.' }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Rahul Sharma', role: 'Business Traveler', content: 'Extremely punctual and professional. The car was clean and the driver was very polite. Best service in Nashik.', rating: 5, avatar: 'https://i.pravatar.cc/150?u=rahul' },
  { id: '2', name: 'Priya Deshmukh', role: 'Family Trip', content: 'We booked an Innova for a trip to Shirdi. It was a very comfortable journey. Highly recommended for family tours.', rating: 5, avatar: 'https://i.pravatar.cc/150?u=priya' },
  { id: '3', name: 'Amit Patil', role: 'Regular Customer', content: 'I have been using Saishree Tours for 2 years now. Consistency in quality is what makes them different.', rating: 5, avatar: 'https://i.pravatar.cc/150?u=amit' }
];

export const WHY_CHOOSE_US = [
  { id: '1', title: '8+ Years Experience', description: 'Providing reliable travel solutions since 2016.', icon: <Award className="w-6 h-6" /> },
  { id: '2', title: 'Safe & Comfortable', description: 'Well-maintained fleet for a stress-free experience.', icon: <Shield className="w-6 h-6" /> },
  { id: '3', title: 'Punctual Service', description: 'We strictly follow schedules to save your valuable time.', icon: <Clock className="w-6 h-6" /> },
  { id: '4', title: 'Professional Drivers', description: 'Experienced and courteous drivers for your safety.', icon: <ThumbsUp className="w-6 h-6" /> }
];
