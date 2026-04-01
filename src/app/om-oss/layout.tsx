import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Om oss — Mesterbedrift med 40+ års erfaring",
  description: "Lørenskog Rørleggerbedrift AS er en tradisjonsrik mesterbedrift med over 40 års erfaring innen sanitær, varme, sprinkler og kjøleanlegg. 20 ansatte, godkjent opplæringsbedrift.",
  alternates: { canonical: "/om-oss" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
