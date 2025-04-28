"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface HeaderClientProps {
  nome: string;
}

export function HeaderClient({ nome }: HeaderClientProps) {
  return (
    <header className="w-full px-4 py-4 flex items-center justify-between border-b border-accent-foreground/10 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <Link
        href="/#exemplos"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
      >
        <ArrowLeft size={16} />
        Voltar
      </Link>

      <h1 className="text-base font-semibold truncate text-foreground max-w-[70%] text-right">
        {nome}
      </h1>
    </header>
  );
}
