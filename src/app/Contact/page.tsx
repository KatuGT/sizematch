import { Metadata } from "next";
import ContactForn from "./ContactForm";

export const metadata: Metadata = {
  title: "Size Match - Contact",
  description: "Get in touch with us!",
};

const Contact = () => {
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
      <ContactForn />
      <p className="mt-4 text-white">
        - You can also send us an email at info@sizematch.net
      </p>
    </div>
  );
};

export default Contact;
