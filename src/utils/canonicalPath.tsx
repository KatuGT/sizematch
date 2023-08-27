import { useRouter } from 'next/router';

export async function GenerateMetadata() {
  const router = useRouter();
  const asPath = router.asPath.split(/[?#]/)[0];
  const siteURL = 'https://www.sizematch.net';
  const canonicalURL = `${siteURL}${asPath}`;

  return {
    metadataBase: new URL(siteURL),
    alternates: {
      canonical: canonicalURL,
      languages: {
        'en-US': '/en-US',
      },
    },
  };
}