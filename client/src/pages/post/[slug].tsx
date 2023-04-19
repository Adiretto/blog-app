import {
  Author,
  Comments,
  CommentsForm,
  PostDetail,
  PostWidjet,
} from "@/components";
import Loading from "@/components/Loading";
import axiosInstance from "@/config/config";
import { Author as AuthorType, Post } from "@/types/types";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { FC, useRef, useState } from "react";

interface PostPageProps {
  post: Post;
  author: AuthorType;
}
const PostPage: FC<PostPageProps> = ({ post, author }) => {
  const router = useRouter();
  const [commentsCount, setCommentsCount] = useState(post.comment.length);
  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} author={author} />
            <Author author={author} />
            <CommentsForm post={post} setCommentsCount={setCommentsCount} />
            <Comments commentsCount={commentsCount} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidjet author_id={author._id} post_id={post._id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const postResponse = await axiosInstance.get(
    `post/getPostBySlug/${context.query.slug}`
  );
  const author = await axiosInstance.get(
    `author/getAuthorById/${postResponse.data.post.author_id}`
  );
  return {
    props: {
      post: postResponse.data.post,
      author: author.data.author,
    },
  };
};
export default PostPage;
