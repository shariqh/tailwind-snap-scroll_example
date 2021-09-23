import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

export const siteTitle = `Framer page transitions`;
export const siteDescription = `Experiements with Framer motion to create page transitions`;

export default function Layout({ children, home }) {
  const { theme, setTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <div className="w-screen h-screen overflow-scroll bg-white dark:bg-black snap snap-y snap-mandatory">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteDescription} />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="preload"
          href="/fonts/WorkSans/WorkSans-variable.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/WorkSans/WorkSans-italic-variable.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Inconsolata/Inconsolata-variable.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <header className="fixed inset-x-0 z-20 flex items-center justify-start py-3 px-8">
        <div className="w-12 h-12 bg-blue-500 rounded mr-full">
          <span className="sr-only">{siteTitle}</span>
        </div>

        <nav className="ml-auto flex gap-3 mr-4">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>

        <button
          className="w-10 h-10 text-center rounded-full text-current hover:text-blue-500 active:text-blue-700 hover:bg-blue-500 hover:bg-opacity-10 dark:hover:text-blue-500 dark:active:text-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-35"
          onClick={switchTheme}
        >
          <span className="sr-only">Toggle Darkmode</span>
          {theme !== "light" ? (
            <>
              <MoonIcon className="w-6 h-6 mx-auto text-current" />
            </>
          ) : (
            <>
              <SunIcon className="w-6 h-6 mx-auto text-current" />
            </>
          )}
        </button>
      </header>
      <main>{children}</main>
    </div>
  );
}
