import { Author, Post } from "@/types/types";
import moment from "moment";
import React, { FC } from "react";
import Image from "next/image";
interface PostDetailProps {
  post: Post;
  author: Author;
}
const PostDetail: FC<PostDetailProps> = ({ post, author }) => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6  md:h-[600px] h-[300px]">
          <Image
            src={`http://localhost:5000/image/post/${post.image}`}
            alt={post.title}
            priority
            fill
            className="relative object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 ">
              <Image
                alt={author.name}
                height={30}
                width={30}
                className="align-middle rounded-full"
                src={`http://localhost:5000/image/author/${author.image}`}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
                {author.name}
              </p>
            </div>
            <div className="font-medium text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-2 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="align-middle">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          <p>{post.content}</p>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
