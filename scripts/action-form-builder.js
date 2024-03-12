const fs = require("fs");
const actionForms = require("../action-forms.json");

const template = fs.readFileSync("./templates/property-inspector.html", "utf8");

for (const action in actionForms) {
  const html = template.replace("%FORM%", JSON.stringify(actionForms[action]));
  let path = `./falfan.sdPlugin/html/${action}.html`;
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, html);
  }
}