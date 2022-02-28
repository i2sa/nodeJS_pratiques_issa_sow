const express = require('express')
const router = express.Router();
const testinscrit = require("../testeinscrit");
const controleurelecteur = require('../controler/electeur')
router.get('/', controleurelecteur.listeelecteur)
router.get("/:id", controleurelecteur.electeurunique);
router.post("/", controleurelecteur.ajouterelecteur);
router.put("/:idelec", controleurelecteur.miseajourelecteur);
router.delete("/:idelec", controleurelecteur.supprimeelecteur);
router.get("/", testinscrit, controleurelecteur.rechercheelecteur);
module.exports = router;