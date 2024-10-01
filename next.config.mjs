import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
