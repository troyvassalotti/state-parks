export default {
  layout: "park",
  tags: ["park"],
  permalink: function ({ state, title }) {
    return `${state.toLowerCase()}/${this.slugify(title)}`;
  },
};
