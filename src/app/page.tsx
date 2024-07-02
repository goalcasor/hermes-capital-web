import Header from '@/components/headers/Header';
import Hero from "@/components/home-sections/hero";
import SectionOne from "@/components/home-sections/1s";
import SectionTwo from "@/components/home-sections/2s";
import SectionThree from "@/components/home-sections/3s";
import SectionFour from '@/components/home-sections/4s';

export default function Home() {
  return (
    <main>
        <Header />
        <Hero />
        <SectionThree />
        <SectionFour />
        <SectionOne />
        <SectionTwo />
    </main>
  );
}
