'use client'
import { pageview } from "@/utils/gtagHelper";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import React, { useEffect } from "react";

const GoogleAnalitycs = ({GA_MEASUREMENT_ID} : {GA_MEASUREMENT_ID : string}) => {

    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const url = pathname + searchParams.toString()
    
        pageview(GA_MEASUREMENT_ID, url);
        
    }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?${GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('consent', 'default', {
            'analytics_storage':'denied',
            'ad_storage':'denied'
          });
 
          gtag('config', '${GA_MEASUREMENT_ID}',{
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
};

export default GoogleAnalitycs;
