import { MDXProvider } from "@mdx-js/react";
const _ = require("lodash");

export default function MDXCompProvider(props) {
  const state = {
    h1: (props) => (
      <h1 id={_.kebabCase(props.children)} className="mt-3 mb-2" {...props} />
    ),
    h2: (props) => (
      <h2 id={_.kebabCase(props.children)} className="mt-3 mb-2" {...props} />
    ),
    h3: (props) => (
      <h3 id={_.kebabCase(props.children)} className="mt-3 mb-2" {...props} />
    ),
    h4: (props) => (
      <h4 id={_.kebabCase(props.children)} className="mt-3 mb-2" {...props} />
    ),
    p: (props) => <p className="mb-2 leading-2" {...props} />,
    a: (props) => <a className="text-primary text-medium" {...props} />,
    strong: (props) => <strong className="text-primary" {...props} />
  };

  return (
    <MDXProvider components={state}>
      <div {...props} />
    </MDXProvider>
  );
}
