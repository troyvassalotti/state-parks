export default function (config) {
  config.addPassthroughCopy("static");

  config.addFilter("UTC", (value) => {
    let valueDate = new Date(value);

    return valueDate.toUTCString();
  });

  config.addFilter("dateString", (date) =>
    date.toUTCString().replace(/\s00:00:00\sGMT/g, ""),
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

  return {
    dir: {
      input: "src",
      layouts: "_includes/layouts",
    },
  };
}
