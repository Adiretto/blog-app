import { Author, Post } from "@/types/types";
import Image from "next/image";
import React, { FC } from "react";
interface AuthorSectionInPostProps {
  post: Post;
  author: Author | null;
}
const AuthorSectionInPost: FC<AuthorSectionInPostProps> = ({
  post,
  author,
}) => {
  if (!author) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 ">
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
  );
};

export default AuthorSectionInPost;
