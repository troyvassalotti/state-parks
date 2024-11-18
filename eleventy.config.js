import "dotenv/config";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (config) {
  config.addPassthroughCopy("static");

  config.addPlugin(eleventyImageTransformPlugin, {
    extensions: "html",
    formats: ["webp", "jpeg", "avif"],
    widths: [320, 640, 960, 1280],
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
      sizes: "auto",
    },
  });

  config.addFilter("UTC", (value) => {
    let valueDate = new Date(value);

    return valueDate.toUTCString();
  });

  config.addFilter("dateString", (date) =>
    new Date(date).toUTCString().replace(/\s\d+:\d+:\d+\sGMT/g, ""),
  );

  config.addFilter("yyyymmdd", (date) => {
    const d = new Date(date);
    let year = d.getUTCFullYear();
    let month = d.getUTCMonth() + 1;
    let day = d.getUTCDate();

    if (month < 10) {
      month = "0" + month;
    }

    if (day < 10) {
      day = "0" + day;
    }
    return `${year}-${month}-${day}`;
  });

  config.addGlobalData("generated", () => {
    let now = new Date();
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeStyle: "long",
    }).format(now);
  });
}

export const config = {
  dir: {
    input: "src",
    layouts: "_includes/layouts",
  },
};
