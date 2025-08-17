import { IProductService } from "@/infra/services/contracts/product";
import useDeps from "../hooks/use-deps"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
    queryKey: ['products', params],
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

  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation<void, AxiosError, CreateProductProps, typeof productService.create>({
    mutationFn: async ({ product }) => productService.create(product),
    onSuccess: (_, { product }) => {
      queryClient.invalidateQueries({ queryKey: ['productId', product.id] });
    }
  })

  return {
    createProduct: mutate,
    isLoading: isPending,
    isSuccess
  }
}

interface UpdateProductProps {
  product: Product
}

export const useUpdateProduct = () => {
  const productService = useDeps<IProductService>('ProductService');

  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation<void, AxiosError, UpdateProductProps, typeof productService.update>({
    mutationFn: async ({ product }) => productService.update(product),
    onSuccess: (_, { product }) => {
      queryClient.invalidateQueries({ queryKey: ['productId', product.id] });
    }
  })

  return {
    updateProduct: mutate,
    isLoading: isPending,
    isSuccess
  }
}

interface DeleteProductProps {
  productId: string
}

export const useDeleteProduct = () => {
  const productService = useDeps<IProductService>('ProductService');

  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation<void, AxiosError, DeleteProductProps, typeof productService.delete>({
    mutationFn: async ({ productId }) => productService.delete(productId),
    onSuccess: (_, { productId }) => {
      queryClient.invalidateQueries({ queryKey: ['productId', productId] });
    }
  })

  return {
    deleteProduct: mutate,
    isLoading: isPending,
    isSuccess
  }
}

interface HideProductProps {
  productId: string
}

export const useHideProduct = () => {
  const productService = useDeps<IProductService>('ProductService');

  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation<void, AxiosError, HideProductProps, typeof productService.hide>({
    mutationFn: async ({ productId }) => productService.hide(productId),
    onSuccess: (_, { productId }) => {
      queryClient.invalidateQueries({ queryKey: ['productId', productId] });
    }
  })

  return {
    hideProduct: mutate,
    isLoading: isPending,
    isSuccess
  }
}

interface ShowProductProps {
  productId: string
}

export const useShowProduct = () => {
  const productService = useDeps<IProductService>('ProductService');

  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation<void, AxiosError, ShowProductProps, typeof productService.show>({
    mutationFn: async ({ productId }) => productService.show(productId),
    onSuccess: (_, { productId }) => {
      queryClient.invalidateQueries({ queryKey: ['productId', productId] });
    }
  })

  return {
    showProduct: mutate,
    isLoading: isPending,
    isSuccess
  }
}