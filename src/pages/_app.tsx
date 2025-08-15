import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/globalStyled";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import Store from "@/ui/context/store";

const Modals = dynamic(async () => import('@/ui/context/modals'), { ssr: false })

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useMemo(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  }), []);

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
