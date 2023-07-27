import Image from "next/image";
import React from "react";

const Donate = () => {
  return (
    <div className="mx-auto grid  max-w-xl place-items-center gap-3 p-4 text-center text-white">
      <div>
        <h2 className="text-3xl">Thank you!</h2>
        <p>
          If you are here, you are probably considering making a donation, and
          that would be wonderful!
        </p>
        <p>
          If this website is useful for you, and by pure coincidence, you have a
          few extra cents in your account, you could use the button below. 😉
        </p>
      </div>
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="XANCF372AP5NJ" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <Image
          alt=""
          src="https://www.paypal.com/en_AR/i/scr/pixel.gif"
          width={1}
          height={1}
        />
      </form>
      <p>I promise I will keep making it grow as much as it can.</p>
    </div>
  );
};

export default Donate;
