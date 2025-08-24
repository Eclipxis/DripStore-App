import dynamic from "next/dynamic";

const Showcase = dynamic(async () => import('@/ui/templates/showcase'), { ssr: false })

const ProductsPage = () => {
  return <Showcase />
}

export default ProductsPage;