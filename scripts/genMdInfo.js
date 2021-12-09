const fs = require("fs");
const CONFIG_FILE_PATH = "./config/index.js";

const tags = fs.readdirSync("./src/markdown");

const info = {};
const filePaths = [];

tags.map((item) => {
  const files = fs.readdirSync(`./src/markdown/${item}`);
  info[item] = files.map((filename) => {
    const filePath = `@/markdown/${item}/${filename}`;
    filePaths.push(filePath);
    return filePath;
  });
});

fs.writeFileSync(
  CONFIG_FILE_PATH,
  `export default ` + JSON.stringify(info, null, 4),
  {
    encoding: "utf-8",
  }
);

fs.appendFileSync(
  CONFIG_FILE_PATH,
  `\n\nexport const info = {
  "files": ${JSON.stringify(filePaths, null, 4)},
  "tags": ${JSON.stringify(tags, null, 4)},
}`
);
