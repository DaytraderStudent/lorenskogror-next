import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Miljø — Miljøfyrtårn-sertifisert rørleggerbedrift",
  description: "Lørenskog Rørleggerbedrift er Miljøfyrtårn-sertifisert. Les om vår miljøpolicy, bærekraftsmål og klimarapportering.",
  alternates: { canonical: "/miljo" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
