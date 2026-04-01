import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Leverandører — Våre VVS-samarbeidspartnere",
  description: "Se våre leverandører innen bad, sanitær, varme, armatur, varmepumper og mer. Vi samarbeider med Grohe, OSO, Variant VVS, Brødrene Dahl og flere.",
  alternates: { canonical: "/leverandorer" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
