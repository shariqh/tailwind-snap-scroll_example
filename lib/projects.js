import fs from "fs";
import path from "path";
import matter from "gray-matter";

//Finding directory named "_projects" from the current working directory of Node.
const projectsDirectory = path.join(process.cwd(), "_projects");

export const getSortedProjects = () => {
  //Reads all the files in the projects directory
  const fileNames = fs.readdirSync(projectsDirectory);

  const allProjectsData = fileNames.map((filename) => {
    const slug = filename.replace(".mdx", "");

    const fullPath = path.join(projectsDirectory, filename);
    //Extracts contents of the MDX file
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = new Date(data.date).toLocaleDateString(
      "en-IN",
      options
    );

    const frontmatter = {
      ...data,
      date: formattedDate
    };
    return {
      slug,
      ...frontmatter
    };
  });

  // console.log('allProjectsData', allProjectData)

  return allProjectsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
};

//Get Slugs
export const getAllProjectSlugs = () => {
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames.map((filename) => {
    return {
      params: {
        slug: filename.replace(".mdx", "")
      }
    };
  });
};

//Get Project based on Slug
export const getprojectdata = async (slug) => {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  const projectContent = fs.readFileSync(fullPath, "utf8");

  // console.log('projectContent', projectContent)
  return projectContent;
};
