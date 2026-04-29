import { createFileRoute } from "@tanstack/react-router";
import { AlpineLuxuryHome } from "@/components/site/AlpineLuxuryHome";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <AlpineLuxuryHome />;
}
