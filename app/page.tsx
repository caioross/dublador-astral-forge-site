import Nav from "../components/Nav";
import { Hero, Pipeline, Voices, Stack, CTA, Footer } from "../components/Sections";

export default function Page() {
  return (
    <main className="relative z-[2]">
      <Nav />
      <Hero />
      <Pipeline />
      <Voices />
      <Stack />
      <CTA />
      <Footer />
    </main>
  );
}
