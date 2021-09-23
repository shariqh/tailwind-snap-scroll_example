import Head from "next/head";
import Layout from "../components/layout";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>

      <section className="relative">
        <motion.div
          layoutId="project-card"
          className="relative top-0 inset-x-0 z-0 w-screen h-screen-80 mx-auto"
          layout
        >
          <motion.img
            layoutId="project-image"
            className="absolute inset-0 w-full object-cover"
            src="https://source.unsplash.com/1920x1080/?nature,water"
            alt=""
          />
        </motion.div>
        <motion.h2
          layoutId="project-title"
          className="absolute text-7xl text-black top-auto bottom-3 left-3"
        >
          This is the title
        </motion.h2>
      </section>

      <section className="py-10">This is the content</section>
    </Layout>
  );
}
