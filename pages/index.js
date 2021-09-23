import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedProjects } from "../lib/projects";
import Project from "../components/project";

export default function IndexPage({ allProjectsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="py-24">
        {allProjectsData.map((data) => (
          <Project key={data.slug} data={data} />
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allProjectsData = getSortedProjects();
  return {
    props: {
      allProjectsData
    }
  };
}
