import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import axiosInstance from "@/config/config";
import { Post } from "@/types/types";
import moment from "moment";
import Link from "next/link";

interface PostWidjetProps {
  author_id: string;
  post_id: string;
}
const PostWidjet: FC<PostWidjetProps> = ({ author_id, post_id }) => {
  const [relatedPosts, setRelatedPosts] = useState<Post[]>();
  const getData = async () => {
    const res = await axiosInstance.get(
      `post/getRelatedPosts?authorId=${author_id}&postId=${post_id}`
    );
    if (!res.data.success) {
      return console.log(res.data.msg);
    }
    setRelatedPosts(res.data.posts);
  };
  useEffect(() => {
    getData();
  }, [author_id, post_id]);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Related Posts
      </h3>
      {relatedPosts?.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              alt={post.title}
              height={60}
              width={60}
              unoptimized
              className="align-middle rounded-full"
              src={`https://blog-app-server-adiretto.vercel.app/image/post/${post.image}`}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} className="text-md" key={index}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidjet;
