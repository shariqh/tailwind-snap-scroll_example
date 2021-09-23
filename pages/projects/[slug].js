import react from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Layout from "../../components/layout";
import MDXProvider from "../../components/mdxProvider";
import MarkdownComponents from "../../components/markdownComponents";
import { getAllProjectSlugs, getprojectdata } from "../../lib/projects";

const _ = require("lodash");
const rehypePrism = require("@mapbox/rehype-prism");

export default function Project({ children, frontMatter, tableOfContents }) {
  const {
    projectId,
    title,
    description,
    date,
    image,
    categories,
    abstract,
    client,
    role,
    platforms,
    deliverables
  } = frontMatter;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>

      <section className="relative px-8">
        <motion.div
          layoutId={`project-${projectId}-card`}
          className="relative top-0 inset-x-0 z-0 -mx-8 mb-8 w-screen h-screen-50 mx-auto"
        >
          <motion.img
            layoutId={`project-${projectId}-image`}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            src={image}
            alt=""
          />
        </motion.div>
        <motion.h2
          layoutId={`project-${projectId}-title`}
          className="relative text-6xl text-black font-medium dark:text-white mb-8"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5, type: "spring" }}
        >
          {abstract}
        </motion.p>
      </section>

      <div className="mt-4 mx-8">
        <Link href="/">
          <a className="text-gray-600">← Back to home</a>
        </Link>
      </div>

      <AnimatePresence>
        <section>
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            exit={{ opacity: 0 }}
            className="col-span-12 prose prose-sm sm:prose lg:prose-lg xl:prose-xl prose-gray-300 dark:prose-white mx-auto mt-10"
          >
            <MDXProvider>
              <MDXRemote
                {...children}
                components={MarkdownComponents}
                scope={{ motion }}
              />
            </MDXProvider>
          </motion.div>
        </section>
      </AnimatePresence>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllProjectSlugs();
  return {
    paths,
    fallback: false
  };
}
export async function getStaticProps({ params }) {
  const projectContent = await getprojectdata(params.slug);
  const { data, content } = matter(projectContent);
  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      rehypePlugins: [rehypePrism]
    }
  });

  // console.log(content.split('\r'))
  const contentJSON = JSON.stringify(content);
  const headLines = contentJSON.split("\\n").filter((line) => {
    // console.log('line', line)
    return line.match(/^###*\s/, "");
  });
  // console.log('headLines', headLines)

  const headlinesData = headLines.map((raw) => {
    const title = raw.replace(/^###*\s/, "");
    const url = `#${_.kebabCase(title)}`;
    const level = raw.slice(0, 3) === "###" ? 3 : 2;
    return { url, title, level };
  });

  const tocData = {
    items: [...headlinesData]
  };
  // console.log('tocData', tocData)
  return {
    props: {
      children: mdxSource,
      frontMatter: data,
      tableOfContents: tocData
    }
  };
}
