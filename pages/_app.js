import { ThemeProvider } from "next-themes";
import { AnimateSharedLayout } from "framer-motion";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <AnimateSharedLayout>
          <Component {...pageProps} />
        </AnimateSharedLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
