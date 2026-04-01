import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lorenskogror-next.vercel.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/om-oss`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/leverandorer`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/miljo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/kontakt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
