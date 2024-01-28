export default {
  layout: "park",
  tags: ["park"],
  permalink: function ({ state, title }) {
    return `${state.toLowerCase()}/${this.slugify(title)}/index.html`;
  },
  eleventyComputed: {
    // https://openweathermap.org/api/one-call-3#hist_parameter
    weather: async function ({ lat, lon, date }) {
      if (!lat || !lon || !date) {
        return {};
      }

      let timestamp = new Date(date).getTime() / 1000;
      let api = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${timestamp}&units=imperial&appid=${process.env.OPEN_WEATHER_API_KEY}`;
      let response = await fetch(api);
      let json = await response.json();
      let { data } = json;

      return data[0];
    },
  },
};
