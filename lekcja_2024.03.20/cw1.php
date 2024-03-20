<?php
    // phpinfo() // informacje 
    // $bokA = 5;
    // $bokB = 7;
    // print("Pole prostokata: ".$bokA. " i ".$bokB."wynosi: "."<i><u><b>".$bokA*$bokB."<br></i></u></b>");
    // print("Obwód prostakata: ".$bokA. "i ".$bokB."wynosi: "."<i><u><b>".(2 * $bokA)+(2 * $bokB)."</i></u></b>");
    // define("KWOTA_DO_ODJECIA", 436.20);  // utworzenie stałej
    // define("STAWKA_PODATKOWA", 0.19);
    // print("Podatek od dochodu 5000PLN w 2000 roku wynosi: ");
    // printf("%0.2f", (5000*STAWKA_PODATKOWA - KWOTA_DO_ODJECIA)); // "%0.2f" - ile miejsc po przecinku w wyniku
    // print(" PLN");
    $tekst = "Kacper";   // zwykłe przypisanie
    $tekst .= " Otręba";   // konkatenacja
    $tekst .= "<br>";
    $tekst .= "ul. Czekoladowa 15/6";
    $tekst .= "<br>";
    $tekst .= "99-900 Czekoladowo";
    print($tekst);
?>