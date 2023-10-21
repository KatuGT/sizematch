"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import LoadingIcon from "../../../public/LoadingRing.svg";

type messageProps = {
  subject: string;
  email: string;
  text: string;
};

const ContactForn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<messageProps>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data: messageProps) => {
    setIsLoading(true);
    const resp = await fetch(`/api/contact`, {
      method: "POST",
      body: JSON.stringify({
        ...data,
      }),
    });
    try {
      if (resp.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Message sent",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        setIsLoading(false);
      } else {
        setIsLoading(false);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something went wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        setIsLoading(false);
      } else {
        console.warn("Unexpected contact form error", error);
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="Subject"
            className="rounded-lg p-2"
            {...register("subject", {
              required: "Required",
              maxLength: {
                value: 50,
                message: "Max length 50 characters",
              },
            })}
          />
          {errors.subject && (
            <p className="text-xs text-red-500">
              {errors.subject.message?.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <input
            type="email"
            placeholder="your-email@gmail.com"
            className="rounded-lg p-2"
            {...register("email", {
              required: "Required",
              maxLength: {
                value: 50,
                message: "Max length 50 characters",
              },
            })}
          />
          {errors.email && (
            <p className="text-xs text-red-500">
              {errors.email.message?.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <textarea
            className="rounded-lg p-2"
            placeholder="Message"
            {...register("text", {
              required: "Required",
              maxLength: {
                value: 300,
                message: "Max length 300 characters",
              },
            })}
          />
          {errors.text && (
            <p className="text-xs text-red-500">
              {errors.text.message?.toString()}
            </p>
          )}
        </div>

        {isLoading ? (
          <div className="mx-auto">
            <Image
              alt="Loading Icon"
              src={LoadingIcon}
              height={50}
              width={50}
            />
          </div>
        ) : (
          <button className="rounded-lg bg-white p-2 hover:bg-transparent hover:text-white hover:outline hover:outline-white ">
            Send
          </button>
        )}
      </form>
      {error && <p className="mt-2 text-red-700">{error}</p>}
    </div>
  );
};

export default ContactForn;
