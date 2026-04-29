import { createFileRoute } from "@tanstack/react-router";
import { HeroSkier } from "@/components/site/HeroSkier";
import { StorySections } from "@/components/site/StorySections";
import { CategoryGrid } from "@/components/site/CategoryGrid";
import { PopularQuestions } from "@/components/site/PopularQuestions";
import { ExperienceSection } from "@/components/site/ExperienceSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSkier />
      <StorySections />
      <CategoryGrid />
      <PopularQuestions />
      <ExperienceSection />
    </>
  );
}
