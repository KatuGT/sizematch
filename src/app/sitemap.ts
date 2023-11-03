import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sizematch.net/";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}BrakeDisc`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}ConnectingRods`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}Contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}Cookies`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}Donate`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}FrontSprocket`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}PistonKit`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}PrivacyPolicy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}RearSprocket`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}TermsAndConditions`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}Valve`,
      lastModified: new Date(),
    },
  ];
}
