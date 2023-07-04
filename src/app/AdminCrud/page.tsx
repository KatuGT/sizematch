"use client";
import PostForm from "@/Components/PostForm/PostForm";
import TableAdmin from "@/Components/TableAdmin/TableAdmin";
import { useHover } from "@/utils/handleHoveredSize";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Size Match - Post Parts",
  description: "Generated by create next app",
};

const AdminCrud = () => {
  const { handleHover, handleMouseLeave, hoverClass } = useHover();

  return (
    <div className="mx-auto my-5 flex w-full flex-col items-center justify-center">
      <PostForm
        hoveredClass={hoverClass}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      />
      <div className="mx-auto my-0 w-full p-4 laptop:w-[min-content]">
        <TableAdmin
          hoveredClass={hoverClass}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default AdminCrud;
