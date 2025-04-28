import Link from "next/link";

export function Header() {
  return (
    <header className="py-6 border-b border-accent-foreground/20">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-primary tracking-tight"
        >
          Lojê
        </Link>
        <nav className="hidden sm:flex gap-6 text-sm text-muted-foreground">
          <Link href="/">Início</Link>
          <Link href="#como-funciona">Como Funciona</Link>
          <Link href="#contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
