import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lorenskogror-next.vercel.app"),
  title: {
    default: "Lørenskog Rørleggerbedrift AS | Mesterbedrift siden 1984",
    template: "%s | Lørenskog Rørleggerbedrift AS",
  },
  description:
    "Rørlegger i Lørenskog med over 40 års erfaring. Mesterbedrift og Miljøfyrtårn-sertifisert. Sanitær, varme, sprinkler, kjøle- og gassanlegg for næring og bolig i Akershus.",
  keywords: [
    "rørlegger Lørenskog",
    "rørlegger Lillestrøm",
    "VVS Lørenskog",
    "mesterbedrift rørlegger Akershus",
    "rørleggerbedrift Lørenskog",
    "sanitær",
    "varme",
    "sprinkler",
    "baderom Lørenskog",
    "baderomsrenovering Lørenskog",
    "rørlegger Rælingen",
    "rørlegger Skedsmo",
    "VVS Akershus",
    "Miljøfyrtårn rørlegger",
  ],
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: "Lørenskog Rørleggerbedrift AS",
    title: "Lørenskog Rørleggerbedrift AS | Mesterbedrift siden 1984",
    description:
      "Rørlegger i Lørenskog med over 40 års erfaring. Mesterbedrift og Miljøfyrtårn-sertifisert. Sanitær, varme, sprinkler, kjøle- og gassanlegg.",
    url: "https://lorenskogror-next.vercel.app",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Lørenskog Rørleggerbedrift AS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lørenskog Rørleggerbedrift AS | Mesterbedrift siden 1984",
    description:
      "Rørlegger i Lørenskog med over 40 års erfaring. Mesterbedrift og Miljøfyrtårn-sertifisert.",
    images: ["/images/hero-bg.jpg"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Plumber",
              "@id": "https://lorenskogror-next.vercel.app/#organization",
              "name": "Lørenskog Rørleggerbedrift AS",
              "url": "https://lorenskogror-next.vercel.app",
              "telephone": "+4792258585",
              "email": "mail@lorenskogror.no",
              "description": "Rørlegger i Lørenskog med over 40 års erfaring. Mesterbedrift og Miljøfyrtårn-sertifisert. Sanitær, varme, sprinkler, kjøle- og gassanlegg for næring og bolig i Akershus.",
              "image": "https://lorenskogror-next.vercel.app/images/logo.png",
              "logo": "https://lorenskogror-next.vercel.app/images/logo.png",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Solheimveien 62",
                "addressLocality": "Lørenskog",
                "addressRegion": "Akershus",
                "postalCode": "1473",
                "addressCountry": "NO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 59.928,
                "longitude": 10.969
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                  "opens": "07:00",
                  "closes": "15:30"
                }
              ],
              "foundingDate": "1984",
              "numberOfEmployees": { "@type": "QuantitativeValue", "value": 20 },
              "areaServed": [
                { "@type": "City", "name": "Lørenskog" },
                { "@type": "City", "name": "Lillestrøm" },
                { "@type": "City", "name": "Rælingen" },
                { "@type": "City", "name": "Skedsmo" },
                { "@type": "AdministrativeArea", "name": "Akershus" }
              ],
              "hasCredential": ["Mesterbedrift","Miljøfyrtårn","Nemko-sertifisert","Godkjent for ansvarsrett","Rørentreprenørene"],
              "sameAs": []
            })
          }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
