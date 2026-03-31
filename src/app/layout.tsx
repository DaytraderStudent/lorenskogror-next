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
  title: {
    default: "Lørenskog Rørleggerbedrift AS | Mesterbedrift siden 1958",
    template: "%s | Lørenskog Rørleggerbedrift AS",
  },
  description:
    "Lørenskog Rørleggerbedrift AS er en tradisjonsrik mesterbedrift med over 40 års erfaring innen sanitær, varme, sprinkler, kjøle- og gassanlegg. Miljøfyrtårn-sertifisert.",
  keywords: [
    "rørlegger",
    "Lørenskog",
    "mesterbedrift",
    "sanitær",
    "varme",
    "sprinkler",
    "rørleggerbedrift",
    "VVS",
  ],
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: "Lørenskog Rørleggerbedrift AS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
