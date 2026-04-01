import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Om oss — Rørlegger i Lørenskog siden 1984",
  description: "Lørenskog Rørleggerbedrift AS er en tradisjonsrik mesterbedrift med over 40 års erfaring innen VVS i Lørenskog, Lillestrøm og Akershus. 20 ansatte, godkjent opplæringsbedrift.",
  alternates: { canonical: "/om-oss" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
