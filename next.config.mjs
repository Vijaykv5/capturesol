import next from "next";

const { defineConfig } = next;

const nextConfig = defineConfig({
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
});

export default nextConfig;
