/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/globalStyled";
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { useCallback, useMemo } from "react";
import Store from "@/ui/context/store";
import useDeps from "@/ui/hooks/use-deps";
import { IAuthService } from "@/infra/services/contracts/auth";
import { AxiosError } from "axios";
import Session from "@/entities/session";

const Modals = dynamic(async () => import('@/ui/context/modals'), { ssr: false })

export default function App({ Component, pageProps }: AppProps) {
  const authService = useDeps<IAuthService>('AuthService');

  const onError = useCallback(async (error: any) => {
    if (error instanceof AxiosError && error.response?.status === 401) {
      const session = JSON.parse(sessionStorage.getItem("session") || "{}") as Session;

      if (session?.token && session?.refreshToken) {
        try {
          const newSession = await authService.refreshToken(
            session.token,
            session.refreshToken
          );
          
          sessionStorage.setItem("session", JSON.stringify(newSession));
        } catch {
          sessionStorage.removeItem("session");
          window.location.href = "/login";
        }
      }
    }
  }, [authService])

  const queryCache = useMemo(() => new QueryCache({ onError }), [onError])
  const mutationCache = useMemo(() => new MutationCache({ onError }), [onError])

  const queryClient = useMemo(() => new QueryClient({
    queryCache,
    mutationCache,
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false
      }
    }
  }), [queryCache, mutationCache]);

  return (
    <QueryClientProvider client={queryClient}>
      <Store>
        <GlobalStyles/>
        <div style={{ position: 'relative' }}>
          <Modals />
          <Component {...pageProps} />
        </div>
      </Store>
    </QueryClientProvider>
  );
}
