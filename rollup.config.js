import path from "path";
import babelPlugin from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import esbuild from "rollup-plugin-esbuild";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";
const createBabelConfig = require("./babel.config");

const extensions = [".ts", ".tsx"];
const { root } = path.parse(process.cwd());

const external = (id) => !id.startsWith(".") && !id.startsWith(root);
const getBabelOptions = (targets) => ({
  ...createBabelConfig({ env: (env) => env === "build" }, targets),
  extensions,
  comments: false,
  babelHelpers: "bundled",
});

const getEsbuild = (target, env = "development") => {
  return esbuild({
    minify: env === "production",
    target,
    tsconfig: path.resolve("./tsconfig.json"),
  });
};

const createDeclarationConfig = (input, outDir) => ({
  input,
  output: { dir: outDir },
  external,
  plugins: [
    typescript({ declaration: true, emitDeclarationOnly: true, outDir }),
    copy({
      flatten: true,
      copyOnce: true,
      targets: [{ src: "node_modules/plyr/dist/plyr.css", dest: "dist" }],
    }),
  ],
});

const createESMConfig = (input, output) => ({
  input,
  output: [
    { file: `${output}.js`, format: "esm" },
    { file: `${output}.mjs`, format: "esm" },
  ],
  external,
  plugins: [
    resolve({ extensions }),
    replace({
      __DEV__: '(import.meta.env&&import.meta.env.MODE)!=="production"',
      preventAssignment: true,
    }),
    getEsbuild("node12"),
  ],
});

const createCommonJSConfig = (input, output) => ({
  input,
  output: { file: `${output}.js`, format: "cjs", exports: "named" },
  external,
  plugins: [
    resolve({ extensions }),
    replace({
      __DEV__: 'process.env.NODE_ENV!=="production"',
      preventAssignment: true,
    }),
    babelPlugin(getBabelOptions({ ie: 11 })),
  ],
});

function createUMDConfig(input, output, env) {
  return {
    input,
    output: {
      file: `${output}.${env}.js`,
      format: "umd",
      exports: "named",
      name: "plyr-react",
      globals: {
        react: "React",
        plyr: "PlyrJS",
        "react-aptor": "useAptor",
        "react/jsx-runtime": "jsxRuntime", // added for UMD build
        "prop-types": "PropTypes",
      },
    },
    external,
    plugins: [
      resolve({ extensions }),
      replace({
        __DEV__: env !== "production" ? "true" : "false",
        preventAssignment: true,
      }),
      babelPlugin(getBabelOptions({ ie: 11 })),
      ...(env === "production" ? [terser()] : []),
    ],
  };
}

function createSystemConfig(input, output, env) {
  return {
    input,
    output: {
      file: `${output}.${env}.js`,
      format: "system",
      exports: "named",
    },
    external,
    plugins: [
      resolve({ extensions }),
      replace({
        __DEV__: env !== "production" ? "true" : "false",
        preventAssignment: true,
      }),
      getEsbuild("node12", env),
    ],
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const c = "index";
  return [
    ...(c === "index" ? [createDeclarationConfig(`src/${c}.tsx`, "dist")] : []),
    createCommonJSConfig(`src/${c}.tsx`, `dist/${c}`),
    createESMConfig(`src/${c}.tsx`, `dist/esm/${c}`),
    createUMDConfig(`src/${c}.tsx`, `dist/umd/${c}`, "development"),
    createUMDConfig(`src/${c}.tsx`, `dist/umd/${c}`, "production"),
    createSystemConfig(`src/${c}.tsx`, `dist/system/${c}`, "development"),
    createSystemConfig(`src/${c}.tsx`, `dist/system/${c}`, "production"),
  ];
}
