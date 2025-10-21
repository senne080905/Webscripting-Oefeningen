function berekenKorting(aantal, prijs, kortingsgroep){
    let korting;
    switch(kortingsgroep){
        case "a":
            korting = 0.1;
            break;
        case "b":
            korting = 0.2;
            break;
        default:
            console.log("Geef de correcte kortingsgroep in");
            break;
    }
    console.log("De totaalprijs na " + korting + "% korting is " + ((aantal * prijs) - (aantal * prijs * korting)));
}