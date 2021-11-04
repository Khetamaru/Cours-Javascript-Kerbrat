class range {
    // Initialise l'objet
    constructor(from, to);

    // Dit si `x` tombe dans l'interval [from; to]
    includes(x);

    // Produit une chaîne de caractère sous la forme "(from...to)", par exemple "(2...8)"
    toString();

    // Analyse une chaîne de caractère au format "(from...to)" et retourne une nouvelle instance
    static parse(s);

    // RegExp pour analyser la chaîne avec parse
    static integerRangePattern;
}