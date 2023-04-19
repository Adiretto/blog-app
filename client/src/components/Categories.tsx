import { Category } from "@/types/types";
import Link from "next/link";
import React, { FC } from "react";

interface CategoriesProps {
  categories: Category[];
  active?: string | string[];
}
const Categories: FC<CategoriesProps> = ({ categories, active }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category._id}`}>
          <span
            className={`cursor-pointer flex items-center  ${
              index === categories.length - 1 ? "border-b-0" : "border-b"
            } pb-3 mb-3 ${category._id === active && "font-bold"}`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};
export default Categories;
