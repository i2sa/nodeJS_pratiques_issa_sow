const electeur = require("./electeur");
const testinscrit = (req, res, next) => {
  const { search } = req.query;
  const liste_electeur = [...electeur];
  const electeur_trouve = liste_electeur.filter((liste) => {
    return liste.prenom.startsWith(search);
  });
  liste_electeur.filter((liste) => {
    if (liste.prenom != search) {
      return res.send("non inscrit");
    } else {
      return electeur_trouve;
    }
  });
  next();
};

module.exports = testinscrit;
