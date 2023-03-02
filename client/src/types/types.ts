export interface Author {
  name: string;
  image: string;
  bio: string;
  post_id: [string];
}
export interface Category {
  name: string;
  slug: string;
  post_id: [string];
}
export interface Comment {
  name: string;
  email: string;
  content: string;
}
export interface Post {
  title: string;
  content: string;
  createdAt: string;
  image: string;
  slug: string;
  author_id: string;
  category_id: string;
  comment: [Comment];
}
