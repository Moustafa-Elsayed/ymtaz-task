import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import HeroSection from "@/components/heroSection/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` ${inter.className} bg-[#F9F9F9] h-full`}>
      <Header />
      <HeroSection />
    </main>
  );
}
