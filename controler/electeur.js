const electeur = require('../electeur');
const listeelecteur = (req, res) => {
    res.json(electeur);
}
const electeurunique = (req, res) => {
    const { id } = req.params;
    const unique_electeur = electeur.find((elc) => elc.id === Number(id));
    if (!unique_electeur) {
        return res.send("electeur n'est pas inscrit");
    }
    res.json(unique_electeur);
}
const ajouterelecteur = (req, res) => {
    const {
        id,
        nom,
        prenom,
        age,
        lieux_naissance,
        bureau_vote,
        numero_carte_electeur,
    } = req.body;
    console.log(
        id,
        prenom,
        nom,
        age,
        lieux_naissance,
        bureau_vote,
        numero_carte_electeur
    );
    electeur.push({
        id,
        prenom,
        nom,
        age,
        lieux_naissance,
        bureau_vote,
        numero_carte_electeur,
    });
    res.json([
        ...electeur,
        {
            id,
            prenom,
            nom,
            age,
            lieux_naissance,
            bureau_vote,
            numero_carte_electeur,
        },
    ]);
}
const miseajourelecteur = (req, res) => {
    const {
        id,
        nom,
        prenom,
        age,
        lieux_naissance,
        bureau_vote,
        numero_carte_electeur,
    } = req.body;
    const { idelec } = req.params;
    console.log(
        id,
        prenom,
        nom,
        age,
        lieux_naissance,
        bureau_vote,
        numero_carte_electeur
    );
    const unique_electeur = electeur.find((elc) => elc.id === Number(idelec));
    if (!unique_electeur) {
        return res.send("electeur n'est pas inscrit");
    }
    let updateelcteur = electeur.map((elc) => {
        if (elc.id === Number(idelec)) {

            elc.prenom = prenom;
            elc.nom = nom;

            elc.age = age;
            elc.lieux_naissance = lieux_naissance;
            elc.bureau_vote = bureau_vote;
            elc.numero_carte_electeur = numero_carte_electeur;
        }
        return elc;

    });
    res.json(updateelcteur);
}
const supprimeelecteur = (req, res) => {
    const {
        id,
        nom,
        prenom,
        age,
        lieux_naissance,
        bureau_vote,
        numero_carte_electeur,
    } = req.body;
    const { idelec } = req.params;
    console.log(
        id,
        prenom,
        nom,
        age,
        lieux_naissance,
        bureau_vote,
        numero_carte_electeur
    );
    const unique_electeur = electeur.find((elc) => elc.id === Number(idelec));
    if (!unique_electeur) {
        return res.send("electeur n'est pas inscrit");
    }
    const deleteelcteur = electeur.filter((elc) => elc.id !== Number(idelec));

    return res.json(deleteelcteur);
}
const rechercheelecteur = (req, res) => {
    const { search } = req.query;
    const liste_electeur = [...electeur];
    const electeur_trouve = liste_electeur.filter((liste) => {
        return liste.prenom.startsWith(search);
    });
    res.json(electeur_trouve);
}
module.exports = { listeelecteur, electeurunique, ajouterelecteur, miseajourelecteur, supprimeelecteur, rechercheelecteur }