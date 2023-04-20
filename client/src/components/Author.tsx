import { Author } from "@/types/types";
import React, { FC } from "react";
import Image from "next/image";
interface AuthorProps {
  author: Author;
}
const Author: FC<AuthorProps> = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute left-[50%] right-0 -top-14 ">
        <Image
          unoptimized
          alt={author.name}
          height={100}
          width={100}
          className="align-middle rounded-full translate-x-[-50%]"
          src={`https://blog-app-server-adiretto.vercel.app/image/author/${author.image}`}
        />
      </div>
      <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-ls">{author.bio}</p>
    </div>
  );
};

export default Author;
