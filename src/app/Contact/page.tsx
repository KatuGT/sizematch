"use client";
import { useForm } from "react-hook-form";
import { Metadata } from "next";
import Swal from "sweetalert2";
import { useState } from "react";
import LoadingIcon from "../../../public/LoadingRing.svg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Size Match - Contact",
  description: "Get in touch with us!",
};

type messageProps = {
  subject: string;
  email: string;
  text: string;
};

const Contact = () => {
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
      } else {
        console.warn("Unexpected contact form error", error);
      }
    }
  };

  return (
    <div className="mx-auto  max-w-xl p-2">
      <h2 className="mb-2 text-3xl text-white">Contact form</h2>
      <p className="mb-2 text-white">
        Hello, do you have an error to report? Please provide us with the part
        code and the error you found, and we will look into it. Or perhaps you
        know of a brand that shares the measurements of their spare parts, and
        you would like to see it here. We would love to hear about it! If
        it&apos;s another matter, you can also get in touch with us 😁
      </p>
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
      <p className="mt-4 text-white">
        You can also send as a email to info@sizematch.net
      </p>
      {error && <p className="mt-2 text-red-700">{error}</p>}
    </div>
  );
};

export default Contact;
