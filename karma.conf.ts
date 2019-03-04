module.exports = cfg => {
  cfg.set({
    browsers: ["ChromeHeadless"],

    singleRun: true,
    autoWatch: false,

    frameworks: ["jasmine", "karma-typescript"],
    reporters: ["progress", "karma-typescript"],
    preprocessors: {
      "**/*.ts": "karma-typescript",
      "**/*.tsx": "karma-typescript"
    },

    files: [
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./tests/**/*.spec.ts",
      "./tests/**/*.spec.tsx"
    ],

    karmaTypescriptConfig: {
      bundlerOptions: {
        constants: {
          "process.env": {
            NODE_ENV: "production"
          }
        }
      },
      compilerOptions: {
        target: "es2016",
        module: "commonjs",
        moduleResolution: "node",
        jsx: "react",
        lib: ["dom", "es2016"]
      },
      coverageOptions: {
        exclude: /(node_modules|tests|spec)/i
      },
      reports: {
        lcovonly: {
          directory: "./coverage",
          subdirectory: () => "",
          filename: "lcov.info"
        },
        html: {
          directory: "./coverage",
          subdirectory: () => ""
        }
      },
      include: ["./src/**/*", "./tests/**/*"]
    }
  });
};
