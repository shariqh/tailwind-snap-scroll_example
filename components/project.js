import Link from "next/link";
import { motion } from "framer-motion";

const Project = (props) => {
  const project = props.data;
  return (
    <div className="snap-start relative flex items-center justify-center w-screen h-screen">
      <motion.div
        layoutId={`project-${project.projectId}-card`}
        className="group relative w-screen-90 h-screen-80 mx-auto goup-hover:border-6 hover:border-blue-500 rounded-xl overflow-hidden"
      >
        <motion.img
          layoutId={`project-${project.projectId}-image`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={project.image}
          alt=""
        />
        <span className="absolute top-8 block px-8 font-mono font-light text-white text-3xl">
          0{project.projectId}
        </span>
        <Link href={`/projects/${project.slug}`}>
          <a>
            <motion.h2
              layoutId={`project-${project.projectId}-title`}
              className="absolute bottom-8 px-8 font-medium text-7xl text-white"
            >
              {project.title}
            </motion.h2>
            <motion.p>{project.abstract}</motion.p>
          </a>
        </Link>
      </motion.div>
    </div>
  );
};

export default Project;
