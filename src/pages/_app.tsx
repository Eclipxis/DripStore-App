import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/globalStyled";
import Modals from "@/ui/context/modals";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles/>
      <div style={{ position: 'relative' }}>
        <Modals />
        <Component {...pageProps} />
      </div>
    </>
  );
}
