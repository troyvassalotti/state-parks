export default {
  layout: "base",
  tags: ["park"],
  permalink: function (data) {
    return `${data.state.toLowerCase()}/${this.slugify(data.title)}`;
  },
};
