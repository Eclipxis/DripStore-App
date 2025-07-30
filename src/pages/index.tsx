import Header from "@/ui/molecules/header";
import About from "@/ui/templates/about";
import Hero from "@/ui/templates/hero";
import ShowCollection from "@/ui/templates/show-collection";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ShowCollection />
      <About />
    </>
  )
}

export default Home;