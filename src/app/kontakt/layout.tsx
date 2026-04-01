import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Kontakt Lørenskog Rørleggerbedrift — Ring 922 58 585",
  description: "Ta kontakt med Lørenskog Rørleggerbedrift AS. Telefon 922 58 585, e-post mail@lorenskogror.no. Solheimveien 62, 1473 Lørenskog.",
  alternates: { canonical: "/kontakt" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
