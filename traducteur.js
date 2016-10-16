function affichageChoix() {
    console.log("1 : Français ==> Boakien");
    console.log("2 : Boakien ==> Français");
    console.log("3 : Paramétres"); // Remplacer les mots inconnus par des underscores_ ou un autre caractére saisie par l'utilisateur
	console.log("* : Crédits");
    console.log("0 : Quitter");
}

function français_boakien(mot) {
    switch (mot) {
    case "stop":
            return "(" + nonTraduit + " mot(s) inconnus)";
    break;
    case "absolument":
        return "GalTuDe";
    break;
    case "acheter":
        return "PoBa";
    break;
    case "actif":
        return "PulTea";
    break;
    case "action":
        return "TuPo";
    break;
    case "activité":
        return "BoaKiDe";
    break;
    case "agresser":
        return "PoBoa";
    break;
    case "aider":
        return "GiuBoa";
    break;
    case "aimer":
        return "DeoKi";
    break;
    case "ajouter":
        return "GiuTuBa";
    break;
    case "aller":
        return "Go";
    break;
    case "altruisme":
        return "BoaDeGiuDe";
    break;
        default:
            nonTraduit++;
            return "_____"
            
    }
}

console.log("Bienvenue dans la version Alpha 1.0 !");
console.log("------------------------");

var choix = "";
var phrase = "";
var motNum = 1;
var saisie = "";
var nonTraduit = 0;
affichageChoix();
while (choix !== "0")  {
    choix = prompt("Choisissez une option :");
    switch (choix) {
    case "1":
        phrase = "";
        saisie = "";
        motNum = 0;
        nonTraduit = 0;
        while (saisie !== "stop") {
            saisie = prompt("Saissiez le mot n°" + motNum + " :\nEcrire stop pour arrêter la saisie");
            motNum++;
            phrase = phrase + " " + français_boakien(saisie);
        }
    console.log(phrase);
    break;
    case "2":
            
    break;
    case "3":

    break;
    case "*":

    break;
    case "0":

    break;
        default: console.log("Je n'est pas compris !");
}
}


