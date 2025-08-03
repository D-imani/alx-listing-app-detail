export interface CardProps{

}
export interface ButtonProps{
    
}
export interface PropertyProps{
    name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  reviews: {
    name: string;
    avatar: string;
    rating: number;
    comment: string;
  }[];
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
  description? : string;
}
export interface PillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}