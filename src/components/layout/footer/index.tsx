export function Footer() {
  return (
    <footer className="py-10 border-t border-accent-foreground/20 mt-20">
      <div className="max-w-4xl mx-auto px-4 text-center text-sm text-muted-foreground space-y-2">
        <p>
          &copy; {new Date().getFullYear()} Lojê. Todos os direitos reservados.
        </p>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://www.gadiego.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Gadiego Nogueira
          </a>
        </p>
      </div>
    </footer>
  );
}
