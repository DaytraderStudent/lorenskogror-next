"use client";

import { Phone, Mail, MapPin, Building2, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-teal-950">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/50 to-teal-950" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Kontakt oss
          </h1>
          <p className="text-teal-200/80 text-lg">
            Vi hjelper deg gjerne med ditt neste prosjekt
          </p>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <ScrollReveal direction="left" className="lg:col-span-3">
              <Card className="border-0 ring-1 ring-slate-100 shadow-sm">
                <CardContent className="pt-2">
                  <h2 className="font-heading text-2xl font-bold text-slate-900 mb-6">
                    Send oss en melding
                  </h2>
                  <form
                    className="space-y-5"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Navn</Label>
                        <Input id="name" placeholder="Ditt fulle navn" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-post</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="din@epost.no"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input id="phone" type="tel" placeholder="+47 000 00 000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Emne</Label>
                      <Input id="subject" placeholder="Hva gjelder henvendelsen?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Melding</Label>
                      <Textarea
                        id="message"
                        placeholder="Beskriv ditt prosjekt eller spørsmål..."
                        rows={5}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-teal-600 hover:bg-teal-700 text-white w-full sm:w-auto px-8"
                    >
                      Send melding
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Contact info */}
            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="space-y-6">
                <Card className="border-0 ring-1 ring-slate-100 shadow-sm">
                  <CardContent className="pt-2 space-y-5">
                    <h2 className="font-heading text-2xl font-bold text-slate-900">
                      Kontaktinformasjon
                    </h2>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                        <Building2 className="size-5 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Firma</p>
                        <p className="text-sm text-slate-600">
                          Lørenskog Rørleggerbedrift AS
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                        <Phone className="size-5 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Telefon</p>
                        <a
                          href="tel:+4792258585"
                          className="text-sm text-teal-600 hover:text-teal-700"
                        >
                          +47 922 58 585
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                        <Mail className="size-5 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">E-post</p>
                        <a
                          href="mailto:mail@lorenskogror.no"
                          className="text-sm text-teal-600 hover:text-teal-700"
                        >
                          mail@lorenskogror.no
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                        <MapPin className="size-5 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">Adresse</p>
                        <p className="text-sm text-slate-600">
                          Solheimveien 62
                          <br />
                          1473 Lørenskog
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                        <Clock className="size-5 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">
                          Åpningstider
                        </p>
                        <p className="text-sm text-slate-600">
                          Man-Fre: 07:00 - 15:30
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-slate-50">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-6 text-center">
              Finn oss
            </h2>
            <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 h-[400px]">
              <iframe
                title="Lørenskog Rørleggerbedrift kart"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.8!2d10.969!3d59.928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46417500d36c7e5d%3A0x0!2sSolheimveien%2062%2C%201473%20L%C3%B8renskog!5e0!3m2!1sno!2sno!4v1700000000000!5m2!1sno!2sno"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
