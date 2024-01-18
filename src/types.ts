type UserRole = "user" | "admin";

// Define a type for the user role
export interface JWT {
  accessToken: string;
}

export interface User<T extends UserRole> extends JWT {
  id: string;
  email: string;
  username: string;
  role: T;
  is_active: boolean;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
