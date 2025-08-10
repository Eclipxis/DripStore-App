import { IProductService } from "@/infra/services/contracts/product";
import useDeps from "../hooks/use-deps"
import { useQuery } from "@tanstack/react-query";

export const useGetProduct = (productId: string) => {
  const productService = useDeps<IProductService>('ProductService');

  const { data, isLoading, error } = useQuery({
    queryKey: ['productId', productId],
    queryFn: async () => productService.getProduct(productId),
  });

  return {
    product: data,
    isLoading,
    error
  }
}