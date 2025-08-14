import { IProductService } from "@/infra/services/contracts/product";
import useDeps from "../hooks/use-deps"
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Product from "@/entities/product";
import { ParamsGetProductDTO } from "@/infra/services/dtos/product.dto";

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

export const useGetProducts = (params: ParamsGetProductDTO) => {
  const productService = useDeps<IProductService>('ProductService');

  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => productService.getProducts(params),
  });

  return {
    products: data,
    isLoading,
    error
  }
}

interface CreateProductProps {
  product: Product
}

export const useCreateProduct = () => {
  const productService = useDeps<IProductService>('ProductService');

  const { mutate, isPending, isSuccess } = useMutation<void, AxiosError, CreateProductProps, typeof productService.create>({
    mutationFn: async ({ product }) => productService.create(product),
  })

  return {
    createProduct: mutate,
    isLoading: isPending,
    isSuccess
  }
}