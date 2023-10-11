function daj_imie(){
    switch(prompt("podaj imie: ","")){
        case "Radomir":
            alert ("don't be racist without me");
            break;
        case "Janek":
            alert ("O ku*wa rakieta");
            break;
        case "Milosz":
            alert ("w czekolade");
            break;
        default:
            alert ("kto ty?");
            break;
    }
}

let ilo="";
for (i = 0; i <= 10; i++){
    ilo+=i+"\n";
}
alert (ilo)
