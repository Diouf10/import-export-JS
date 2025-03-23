// Le mode strict : début
//"use strict";

prenom = 'Romain'; // je n'ai pas déclaré la variable (avec var, let ou const)
console.log(prenom); // Romain

direBonjour('Romain'); 
addition(1, 2); // dupliqué (2 paramètres avec le même nom)

function direBonjour() {
    "use strict"; // va déclecher une erreur si on essaie de modifier une variable non déclarée
    nom = 'Doe';
    console.log(`{nom} `);
}

function addition(a, a) { // va déclencher une erreur car 2 paramètres ont le même nom
    return a + a;
}