function test(){
alert("witam");
}

function mnozenie()
{
    a = prompt("podaj liczbe","");
    b = prompt("podaj liczbe","");
    alert("pomnożone dają:" + a*b);
}

function DIVIDE()
{
    a = prompt("podaj liczbe","");
    b = prompt("podaj liczbe","");
    alert("pomnożone dają:" + a/b);
}

function suma()
{
    a = prompt("podaj liczbe","");
    b = prompt("podaj liczbe","");
    alert("ich suma to: " + a-+-b);

}

function odejmowanie()
{
    a = prompt("podaj liczbe","");
    b = prompt("podaj liczbe","");
    alert("ich różnica to: " + a-b);

}

function nan()
{
    let a = prompt("podaj liczbe","");
    let b = prompt("podaj liczbe","");
    let wynik = (a*b)? a*b:a*b;
    let metoda = (isNaN(wynik))?
    "tylko liczby podawaj ":
    "iloczyn liczb wynosi: "+wynik;
    alert(metoda);
}

function pisz()
{
    document.write("hejo");
    document.write("<br><b>witaj</b><br>");
    document.write('<input type="button" onClick="mnozenie()" value="pomnożę">');

}

function odnies1()
{
    document.write("siemka");
    window.location.href="html2.html";

}
function odnies2()
{
    document.write("cześć");
    window.location.href="html1.html";

}

let name = prompt("Dej imie", "");
if (name == "Kapi")
{
    alert("Heloł bos, we hav a problem bos.")
}
else{
    alert("Hu ar ju?")
}

