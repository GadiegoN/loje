import { CLIENTS } from "@/data/clients";

export async function getClientBySlug(slug: string) {
  return CLIENTS.find((c) => c.slug === slug);
}
