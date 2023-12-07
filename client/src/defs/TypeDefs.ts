export type ProductType = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: string;
  tag: string[];
  thumbnail: string[];
  images: string[];
  createdAt: string;
  updatedAt: string;
};

export type MyResponseType<T> = {
  statusCode: string;
  message: string;
  data: T;
};

export type ProductModel = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: string;
  tag: string[];
  thumbnail: string[];
  images: string[];
  createdAt: string;
  updatedAt: string;
};

export type ComponentClassType = {
  className: string;
};
