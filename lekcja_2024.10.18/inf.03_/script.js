function Przeslij(){
    let imie = document.getElementById("imie").value;
    let nazwisko = document.getElementById("nazwisko").value;
    let zgloszenie = document.getElementById("zgloszenie").value;
    let check = document.getElementById("check");
    let wynik = "";

    if (check.checked)
    {
        document.getElementById("wynik").style.color = "navy";
        wynik = `${imie.toUpperCase()} ${nazwisko.toUpperCase()} <br>Treść twojej sprawy: ${zgloszenie}`;
    }
    else
    {
        document.getElementById("wynik").style.color = "red";
        wynik = "Musisz zapoznać się z regulaminem";
    }
    document.getElementById("wynik").innerHTML = wynik;
}