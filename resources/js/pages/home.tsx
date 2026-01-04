import MainLayout from "@/layouts/main-layout"
import Hero from "@/components/ui/hero"
import About from "@/components/ui/about";
import Products from "@/components/ui/products";
import Contact from "@/components/ui/contact";


export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Products />
      <Contact />
    </MainLayout>
  );
}
