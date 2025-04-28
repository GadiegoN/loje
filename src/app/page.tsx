"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { STEPS } from "@/data";
import { Footer, Header } from "@/components/layout";
import { CLIENTS } from "@/data/clients";

export default function HomePage() {
  return (
    <>
      <Header />
      <section className="py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto px-4">
          <div className="text-center md:text-left flex-1 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Seu comércio local <span className="text-primary">online</span> em
              poucos minutos
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl">
              Crie uma página profissional com seus produtos, informações e
              botão do WhatsApp. Ideal para padarias, lanchonetes, salões,
              mercadinhos e mais.
            </p>

            <Link
              href="https://wa.me/5534999999999?text=Olá! Quero criar minha página na Lojê 🚀"
              target="_blank"
              className="inline-flex items-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-secondary transition"
            >
              <Phone size={18} />
              Falar com a Lojê
            </Link>
          </div>

          <div className="flex-1">
            <Image
              src="/loje-hero.png"
              alt="Ilustração sobre landing pages da Lojê"
              width={500}
              height={400}
              className="w-full h-auto rounded-xl shadow-xl"
              priority
            />
          </div>
        </div>

        <div id="como-funciona" className="mt-28 space-y-4 text-center">
          <h2 className="text-2xl font-semibold mb-10">Como funciona?</h2>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
            {STEPS.map((step, index) => (
              <div
                key={index}
                className="bg-background border border-accent-foreground/10 rounded-xl p-6 shadow-sm transition hover:scale-[1.02] active:scale-[1.01] hover:shadow-md"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <section className="py-20 px-4 max-w-6xl mx-auto" id="exemplos">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Landing pages prontas para comércios locais 🚀
            </h1>
            <p className="text-muted-foreground text-lg">
              Veja alguns exemplos de páginas que já estão no ar:
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CLIENTS.map((comercio) => (
              <Link
                key={comercio.slug}
                href={`/${comercio.slug}`}
                className="bg-background border border-accent-foreground/10 rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.02] active:scale-[0.99] transition-transform duration-300 ease-in-out"
              >
                <Image
                  src={comercio.imagem}
                  alt={comercio.nome}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-1">
                    {comercio.nome}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {comercio.descricao}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
