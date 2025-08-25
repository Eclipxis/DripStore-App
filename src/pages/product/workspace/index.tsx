/* eslint-disable @typescript-eslint/no-unused-vars */
import { iocContainer } from "@/infra/ioc";
import { IProductService } from "@/infra/services/contracts/product";
import { ProductDTO } from "@/infra/services/dtos/product.dto";
import SessionUtils from "@/utils/session";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

const Workspace = dynamic(async () => import('@/ui/templates/workspace'), { ssr: false });

interface WorkspaceProps {
  stringfiedProduct?: string;
}

const WorkspaceProductPage = ({ stringfiedProduct }: WorkspaceProps) => {  
  const product = stringfiedProduct ? ProductDTO.toProduct(JSON.parse(stringfiedProduct) as ProductDTO) : undefined

  return (
    <>
      <Head>
        <title>{product?.name ?? 'Produto'} | DRIP Store</title>
        <meta property="og:image" content={product?.pictures[0] ?? 'https://drip-store.s3.us-east-1.amazonaws.com/hero-bg.jpg'} />
        <meta property="og:title" content={`${product?.name} | DRIP Store`} />
        <meta property="og:description" content={product?.description ?? 'Produto Drip Store'} />
        <meta name="keywords" content="street wear, moda, urbano, zona leste, itaquera" />
        <meta name="author" content="DRIP Store" />
      </Head>
      <Workspace product={product} />
    </>
  )
}

export async function getServerSideProps (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<WorkspaceProps>> {
  if (!SessionUtils.getSession(ctx))
    return { notFound: true };
  
  const { query } = ctx

  if (!query?.productid)
    return { props: { } }

  const productService = iocContainer.get<IProductService>('ProductService');

  try {
    const product = await productService.getProduct(query.productid as string);
    const stringfiedProduct = JSON.stringify(ProductDTO.toDTO(product));
    return {
      props: { stringfiedProduct }
    }
  } catch (error) {
    return { notFound: true }
  }
}

export default WorkspaceProductPage;