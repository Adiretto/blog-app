import { Categories, PostCard } from "@/components";
import axiosInstance from "@/config/config";
import { Category, Post } from "@/types/types";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface CategoryPageProps {
  posts: Post[];
  categories: Category[];
}
const CategoryPage: FC<CategoryPageProps> = ({ posts, categories }) => {
  const router = useRouter();
  const { category } = router.query;
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => {
            return <PostCard post={post} key={post._id} />;
          })}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <Categories categories={categories} active={category} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.query;
  const postsResponse = await axiosInstance.get(
    `post/getSortedPostsByCategory/${category}`
  );
  const categoriesResponse = await axiosInstance.get(
    "category/getAllCategories"
  );
  const posts = postsResponse.data.posts;
  const categories = categoriesResponse.data.categories;

  return {
    props: {
      posts,
      categories,
    },
  };
};
export default CategoryPage;
