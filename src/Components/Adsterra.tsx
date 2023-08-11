'use client'
import React, { useEffect, useMemo, useRef } from "react";

const Adsterra = () => {
  const banner = useRef<HTMLDivElement>(null);
  
  const atOptions = useMemo(
    () => ({
      key: process.env.NEXT_PUBLIC_ADSTERRA_KEY,
      format: "iframe",
      height: 60,
      width: 468,
      params: {},
    }),
    []
  );

  useEffect(() => {
    
    const currentBanner = banner.current;
    const adsterraScript = document.createElement("script");
    if (currentBanner && !currentBanner.firstChild) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.profitablecreativeformat.com/${atOptions.key}/invoke.js`;
      adsterraScript.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      currentBanner.append(adsterraScript);
      currentBanner.append(script);
    }
    return () => {
      currentBanner?.removeChild(adsterraScript);
    };
  }, [banner, atOptions]);

  return (
    <div
      className="mx-2 my-5 hidden mobile:block items-center justify-center border border-gray-200 text-center text-white"
      ref={banner}
    ></div>
  );
};

export default Adsterra;
