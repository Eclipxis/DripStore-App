/* eslint-disable @typescript-eslint/no-unused-vars */
import { iocContainer } from "@/infra/ioc";
import { IProductService } from "@/infra/services/contracts/product";
import { ProductDTO } from "@/infra/services/dtos/product.dto";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

const ProductDetails = dynamic(async () => import('@/ui/templates/product-details'), { ssr: false });

interface ProductDetailsProps {
  stringfiedProduct?: string;
}

export default function ProductDetailsPage ({ stringfiedProduct }: ProductDetailsProps) {
  const productDTO = stringfiedProduct ? JSON.parse(stringfiedProduct) as ProductDTO : undefined
  
  return (
    <>
      <Head>
        <title>{productDTO?.name ?? 'Produto'} | DRIP Store</title>
        <meta property="og:image" content={productDTO?.pictures[0] ?? 'https://drip-store.s3.us-east-1.amazonaws.com/hero-bg.jpg'} />
        <meta property="og:title" content={`${productDTO?.name} | DRIP Store`} />
        <meta property="og:description" content={productDTO?.description ?? 'Produto Drip Store'} />
        <meta name="keywords" content="street wear, moda, urbano, zona leste, itaquera" />
        <meta name="author" content="DRIP Store" />
      </Head>
      {productDTO ? <ProductDetails product={ProductDTO.toProduct(productDTO)} /> : <></>}
    </>
  )
}

export async function getServerSideProps (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<ProductDetailsProps>> {
  const { params } = ctx

  if (!params?.productid)
    return { props: { } }

  const productService = iocContainer.get<IProductService>('ProductService');

  try {
    const product = await productService.getProduct(params.productid as string);
    const stringfiedProduct = JSON.stringify(ProductDTO.toDTO(product));
    return {
      props: { stringfiedProduct }
    }
  } catch (error) {
    return { props: { } }
  }
}