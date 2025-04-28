import { notFound } from "next/navigation";
import Image from "next/image";
import { Phone } from "lucide-react";
import { CLIENTS } from "@/data/clients";
import { HeaderClient } from "@/components/layout";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return CLIENTS.map((client) => ({ slug: client.slug }));
}

export default async function ComercioPage({ params }: PageProps) {
  const { slug } = await params;

  const comercio = CLIENTS.find((c) => c.slug === slug);

  if (!comercio) return notFound();

  return (
    <>
      <HeaderClient nome={comercio.nome} />
      <section className="py-16 max-w-3xl mx-auto px-4 text-center">
        <Image
          src={comercio.imagem}
          alt={`Imagem de capa do comércio ${comercio.nome}`}
          width={800}
          height={400}
          className="rounded-xl mb-8 w-full h-96 object-cover object-center shadow-md"
        />
        <h1 className="text-3xl font-bold mb-2">{comercio.nome}</h1>
        <p className="text-muted-foreground text-lg mb-6">
          {comercio.descricao}
        </p>
        <ul className="grid gap-2 text-left text-muted-foreground mb-8">
          {comercio.produtos.map((produto, i) => (
            <li key={i} className="before:content-['✅'] before:mr-2">
              {produto}
            </li>
          ))}
        </ul>
        <a
          href={`https://wa.me/${comercio.whatsapp}?text=Olá! Vim pela página da Lojê e quero fazer um pedido.`}
          target="_blank"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition"
        >
          <Phone size={18} />
          {comercio.botaoWhatsapp}
        </a>
      </section>
    </>
  );
}
