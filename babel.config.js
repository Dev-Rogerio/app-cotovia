module.exports = {
  presets: [
    "react-app",
    [
      "@babel/preset-env",
      {
        targets: "> 0.25%, not dead",
      },
    ],
  ],
};
