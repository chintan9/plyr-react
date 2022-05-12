module.exports = (api, targets) => {
  // https://babeljs.io/docs/en/config-files#config-function-api
  const isTestEnv = api.env("test");

  return {
    babelrc: false,
    ignore: ["./node_modules"],
    presets: [
      [
        "@babel/preset-env",
        {
          loose: true,
          modules: isTestEnv ? "commonjs" : `false`,
          targets: isTestEnv ? { node: "current" } : targets,
        },
      ],
      "@babel/preset-typescript",
      "@babel/preset-react",
    ],
    plugins: [
      ["@babel/plugin-transform-react-jsx", { runtime: "automatic" }],
      "@babel/plugin-transform-typescript",
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-nullish-coalescing-operator",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-proposal-class-properties",
      "transform-react-remove-prop-types",
    ],
  };
};
