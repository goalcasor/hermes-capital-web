import Header from '@/components/headers/Header';
import SectionOne from "@/components/home-sections/1s";
import SectionTwo from "@/components/home-sections/2s";
import SectionThree from "@/components/home-sections/3s";
import Hero from "@/components/home-sections/hero";

export default function Home() {
  return (
    <main>
        <Header />
        <Hero />
        <SectionOne />
  {/*       <SectionTwo />
        <SectionThree /> */}
    </main>
  );
}
