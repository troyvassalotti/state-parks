export default function (plop) {
  plop.setGenerator("park", {
    description: "Log a new park visit.",
    prompts: [
      {
        type: "input",
        name: "park",
        message: "What park did you visit?",
      },
      {
        type: "list",
        name: "state",
        message: "What state is it in?",
        choices: ["MD"],
      },
      {
        type: "input",
        name: "date",
        message: "When did you visit? Use YYYY-MM-DDTHH:MM",
      },
      {
        type: "input",
        name: "lat",
        message: "Latitude?",
      },
      {
        type: "input",
        name: "lon",
        message: "Longitude?",
      },
      {
        type: "confirm",
        name: "hadTrail",
        message: "Did you go on a specific trail?",
      },
      {
        type: "input",
        name: "trail",
        message: "What trail did you hike?",
        when: function ({ hadTrail }) {
          return hadTrail;
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/parks/{{lowerCase state}}/{{dashCase park}}.md",
        templateFile: "plop-templates/park.hbs",
      },
    ],
  });
}
