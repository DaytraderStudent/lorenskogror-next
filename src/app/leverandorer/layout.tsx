import { Metadata } from "next";
export const metadata: Metadata = {
  title: "VVS-leverandører — Rørlegger Lørenskog",
  description: "Lørenskog Rørleggerbedrift samarbeider med ledende VVS-leverandører som Grohe, OSO, Variant VVS og Brødrene Dahl. Kvalitetsprodukter for kunder i Lørenskog og Akershus.",
  alternates: { canonical: "/leverandorer" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
