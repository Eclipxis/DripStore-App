import ProductDetails from "@/ui/templates/product-details";
// import { GetServerSidePropsContext } from "next";
import Head from "next/head";

export default function ProductDetailsPage () {
  return (
    <>
      <Head>
        <title>NOME DA ROUPA | DRIP Store</title>
        <meta property="og:image" content="PRIMEIRA IMAGEM" />
        <meta property="og:title" content="NOME DA ROUPA | DRIP Store" />
        <meta property="og:description" content="COLOCAR DESCRIÇÃO DA ROUPA" />
        <meta name="keywords" content="street wear, moda, urbano, zona leste, itaquera" />
        <meta name="author" content="DRIP Store" />
      </Head>
      <ProductDetails />
    </>
  )
}

// export async function getServerSideProps (ctx: GetServerSidePropsContext) {}