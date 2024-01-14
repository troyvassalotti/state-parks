export default {
  layout: "park",
  tags: ["park"],
  permalink: function (data) {
    return `${data.state.toLowerCase()}/${this.slugify(data.title)}`;
  },
};
