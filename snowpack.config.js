module.exports = {
  mount: {
    src: "/dist",
    public: "/",
  },
  plugins: [
    "@snowpack/plugin-postcss",
    [
      "@snowpack/plugin-run-script",
      {
        cmd: "eleventy",
        watch: "$1 --watch",
      },
    ],
  ],
  buildOptions: {
    out: "gh-pages",
  },
  devOptions: {
    open: "none",
    hmrDelay: 100,
  },
  optimize: {
    // bundle: true,
    // minify: true,
    // target: "es2020",
  },
};
