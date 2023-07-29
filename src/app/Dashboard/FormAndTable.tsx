"use client";
import { PostForm, TableAdmin } from '@/Components';
import { EditingModeProvider } from '@/Context/EditingMode/EditingModeContext';
import { useHover } from '@/utils';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react'

const FormAndTable = () => {
    const { handleHover, handleMouseLeave, hoverClass } = useHover();
  const { status } = useSession();
  console.log(status);
  
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
}

export default FormAndTable