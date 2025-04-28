import { FileText, Brush, Share2, BadgeDollarSign } from "lucide-react";

export const STEPS = [
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: "Você envia as informações",
    description: "Nome do comércio, produtos, fotos e WhatsApp.",
  },
  {
    icon: <Brush className="w-6 h-6 text-primary" />,
    title: "Criamos sua página",
    description: "Layout personalizado, bonito e pronto pra usar.",
  },
  {
    icon: <Share2 className="w-6 h-6 text-primary" />,
    title: "Você recebe o link",
    description: "Pronto para divulgar no Instagram e grupos.",
  },
  {
    icon: <BadgeDollarSign className="w-6 h-6 text-primary" />,
    title: "Tudo por R$150",
    description: "Preço especial de lançamento.",
  },
];
