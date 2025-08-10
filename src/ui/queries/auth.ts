import { IAuthService } from "@/infra/services/contracts/auth";
import useDeps from "../hooks/use-deps"
import { useMutation } from "@tanstack/react-query";
import Session from "@/entities/session";
import { AxiosError } from "axios";

interface SignInProps {
  code: string;
  password: string;
}

export const useSignIn = () => {
  const authService = useDeps<IAuthService>('AuthService');

  const { mutate, data, isPending, isSuccess } = useMutation<Session, AxiosError, SignInProps, typeof authService.signIn>({
    mutationFn: async ({ code, password }) => authService.signIn(code, password)
  });

  return {
    signIn: mutate,
    session: data,
    isLoading: isPending,
    isSuccess
  }
}

interface RefreshTokenProps {
  accessToken: string;
  refreshToken: string;
}

export const useRefreshToken = () => {
  const authService = useDeps<IAuthService>('AuthService');

  const { mutate, data, isPending } = useMutation<Session, AxiosError, RefreshTokenProps, typeof authService.refreshToken>({
    mutationFn: async ({ accessToken, refreshToken }) => authService.refreshToken(accessToken, refreshToken)
  });

  return {
    refreshToken: mutate,
    session: data,
    isLoading: isPending
  }
}