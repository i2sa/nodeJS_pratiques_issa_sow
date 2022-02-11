console.log(__dirname);
const os = require("os");
const { votant, candidat } = require("./bureauvote");
console.log(`liste votants:${votant}`);
console.log(`liste des candidats: ${candidat.nom},${candidat.prenom}`);
const systeminformatique = {
  type: os.type(),
  ram: os.freemem(),
  user: os.userInfo().username,
  processeur: os.cpus().map((model) => {
    return model.speed;
  }),
  version: os.version(),
  release: os.release(),
};
console.log("le systeme installe dans les bureaux du senegal: ");
console.log(systeminformatique);
console.log("nodemon installe");
