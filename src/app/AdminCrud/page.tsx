"use client";
import PostForm from "@/Components/PostForm/PostForm";
import TableAdmin from "@/Components/TableAdmin/TableAdmin";
import { EditingModeProvider } from "@/Context/EditingMode/EditingModeContext";
import { useHover } from "@/utils/useHover";
import { Metadata } from "next";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Size Match - Post Parts",
  description: "Post a new sparepart or edit a existing one",
};

const AdminCrud = () => {
  const { handleHover, handleMouseLeave, hoverClass } = useHover();
  const { status } = useSession();

  if (status === "authenticated") {
    return (
      <EditingModeProvider>
        <div className="mx-auto my-5 flex w-full flex-col items-center justify-center">
          <PostForm
            hoveredClass={hoverClass}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          />
          <div className="mx-auto my-0 w-full p-4 laptop:w-min">
            <TableAdmin
              hoveredClass={hoverClass}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
      </EditingModeProvider>
    );
  }

  if (status === "unauthenticated") {
    redirect("/");
  }
};

export default AdminCrud;
