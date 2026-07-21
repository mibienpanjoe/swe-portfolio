import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Toolkit } from "@/components/toolkit";
import { Education } from "@/components/education";
import { Certifications } from "@/components/certifications";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";
import { getContributions } from "@/lib/github";

export const revalidate = 86400;

export default async function Home() {
  const contributions = await getContributions();
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4">
        <Hero contributions={contributions} />
        <Education />
        <Projects />
        <Certifications />
        <Toolkit />
        <Footer />
      </main>
    </>
  );
}
