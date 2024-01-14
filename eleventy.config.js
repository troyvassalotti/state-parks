export default function (config) {
  config.addPassthroughCopy("static");

  return {
    dir: {
      input: "src",
      layouts: "_includes/layouts",
    },
  };
}
