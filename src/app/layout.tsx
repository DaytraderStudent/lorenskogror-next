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
    "rørlegger",
    "Lørenskog",
    "mesterbedrift",
    "sanitær",
    "varme",
    "sprinkler",
    "rørleggerbedrift",
    "VVS",
    "Akershus",
    "baderom",
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
              "name": "Lørenskog Rørleggerbedrift AS",
              "url": "https://lorenskogror-next.vercel.app",
              "telephone": "+4792258585",
              "email": "mail@lorenskogror.no",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Solheimveien 62",
                "addressLocality": "Lørenskog",
                "postalCode": "1473",
                "addressCountry": "NO"
              },
              "foundingDate": "1984",
              "numberOfEmployees": { "@type": "QuantitativeValue", "value": 20 },
              "areaServed": ["Lørenskog", "Lillestrøm", "Rælingen", "Skedsmo", "Akershus"],
              "hasCredential": ["Mesterbedrift", "Miljøfyrtårn", "Nemko-sertifisert", "Godkjent for ansvarsrett", "Rørentreprenørene"]
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
