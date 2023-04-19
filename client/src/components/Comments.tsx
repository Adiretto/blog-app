import axiosInstance from "@/config/config";
import { Comment, Post } from "@/types/types";
import moment from "moment";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

interface CommentsProps {
  commentsCount: number;
}
const Comments: FC<CommentsProps> = ({ commentsCount }) => {
  const router = useRouter();
  const currentPath = router.asPath;
  const pathArray = currentPath.split("/");
  const [comments, setComments] = useState<Comment[]>([]);
  const getComments = async () => {
    const res = await axiosInstance.get(
      `post/getPostBySlug/${pathArray[pathArray.length - 1]}`
    );
    if (!res.data.success) {
      console.log(res.data.msg);
      return;
    }
    setComments(res.data.post.comment);
  };
  useEffect(() => {
    getComments();
  }, [commentsCount, currentPath]);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} Comments
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{" "}
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {comment.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
