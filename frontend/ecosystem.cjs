
module.exports = {
    apps: [
      {
        name: "ESY",
        port: "3042",
        exec_mode: "cluster",
        instances: "max",
        script: "./.output/server/index.mjs",
      },
    ],
  };