// let name = prompt("Dej imie", "");
// if (name == "Kapi")
// {
//     alert("Heloł bos, we hav a problem bos.")
// }
// else{
//     alert("Hu ar ju?")
// }

function szyf()
{
    let login = prompt("Podaj login", "");
    let password = prompt("Podaj hasło", "");
    let haslo1 = password.charCodeAt(0);

    if (login == "admin" && haslo1 == 56)
    {
        document.write("SUKCES");
    }
    else{
        alert("Zły login lub hasło");
    }
}

function szyfrowanie()
{
    let litera = prompt("Podaj jeden znak do zaszyfrowania", "");
    alert(litera.charCodeAt(0));
}