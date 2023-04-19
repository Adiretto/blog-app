export interface Author {
  _id: string;
  name: string;
  image: string;
  bio: string;
  post_id: [string];
}
export interface Category {
  _id: string;
  name: string;
  slug: string;
  post_id: [string];
}
export interface Comment {
  _id: string;
  name: string;
  email: string;
  content: string;
  createdAt: Date;
}
export interface Post {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  createdAt: string;
  image: string;
  slug: string;
  author_id: string;
  category_id: string;
  comment: [Comment];
}
