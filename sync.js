const { readFile, writeFile } = require("fs");
const util = require("util");
const writepromes = util.promisify(writeFile);
const readpromes = util.promisify(readFile);
const otherpromise = async () => {
  try {
    await writepromes(
      "./autretypepromes.txt",
      "je m'experimente d'un autree type de promesse et bien compris",
      { flag: "a" }
    );
    const read = await readpromes("./autretypepromes.txt", "utf-8");
    console.log(read);
  } catch {}
};
otherpromise();
const read = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};
read("./issa.text")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
