import Footer from "@/ui/molecules/footer";
import Header from "@/ui/molecules/header";
import About from "@/ui/templates/about";
import Contact from "@/ui/templates/contact";
import Hero from "@/ui/templates/hero";
import ShowCollection from "@/ui/templates/show-collection";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ShowCollection />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;