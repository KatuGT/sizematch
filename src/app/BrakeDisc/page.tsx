import React from "react";
import { Metadata } from "next";
import BrakeDiscSearcher from "./BrakeDiscSearcher";

export const metadata: Metadata = {
  title: "Size Match - Brake Disc",
  description: "Find the perfect fit for your brake disc.",
  metadataBase: new URL('https://www.sizematch.net/'),
  alternates: {
    canonical: 'FrontSprocket',
    languages: {
      'en-US': '/en-US',
    },
  },
};

// export function CanonicalURL() {
//   const siteUrl = 'https://www.sizematch.net';
//   const router = useRouter();
//   const cleanPath = router.asPath.split('#')[0].split('?')[0];
//   const canonicalUrl = `${siteUrl}` + (router.asPath === '/' ? '' : cleanPath);
//   console.log(canonicalUrl);
  
//   return (
//     <Head>
//       <link rel="canonical" href={canonicalUrl} />
//     </Head>
//   );
// };

const BrakeDisc = () => {
  return (
    <div>
      <BrakeDiscSearcher />
    </div>
  );
};

export default BrakeDisc;
