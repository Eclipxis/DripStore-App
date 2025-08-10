import Footer from "@/ui/molecules/footer";
import Header from "@/ui/molecules/header";
import About from "@/ui/templates/about";
import Contact from "@/ui/templates/contact";
import Hero from "@/ui/templates/hero";
import ShowCollection from "@/ui/templates/show-collection";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Moda Street Wear em Itaquera | DRIP Store</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta httpEquiv="imagetoolbar" content="no" />
        <meta property="og:image" content="https://drip-store.s3.us-east-1.amazonaws.com/hero-bg.jpg" />
        <meta property="og:title" content="Drip Street Wear Store" />
        <meta 
          property="og:description" 
          content="Eleve seu estilo com as melhores peças de street wear.\n
          Autenticidade, qualidade e atitude em cada look." 
        />
        <meta name="description" content="Loja de street wear na Zona Leste de São Paulo. Peças urbanas, exclusivas e com atitude. Conheça a DRIP Store!"></meta>
        <meta name="keywords" content="street wear, moda, urbano, zona leste, itaquera" />
        <meta name="author" content="DRIP Store" />
      </Head>
      <Header />
      <Hero />
      <ShowCollection />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage;