"use client";
import { getLocalStorage, setLocalStorage } from "@/utils/storageHelpers";
import Link from "next/link";
import { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";

const CookiesConcent = () => {

    const [cookieConsent, setCookieConsent] = useState(false);

    useEffect (() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null)

        setCookieConsent(storedCookieConsent)
    }, [setCookieConsent])

    
    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied'

        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });

        setLocalStorage("cookie_consent", cookieConsent)

    }, [cookieConsent]); 
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        enableDeclineButton
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        onAccept={() => setCookieConsent(true)}
        onDecline={() =>setCookieConsent(false)}
      >
        <p>This website uses cookies to enhance the user experience. </p>
        <p>
          Read more about our{" "}
          <Link href="PrivacyPlicy" className="underline">
            Privacy policy
          </Link>{" "}
          and{" "}
          <Link href="Cookies" className="underline">
            Privacy policy
          </Link>
        </p>
      </CookieConsent>
    </>
  );
};

export default CookiesConcent;
