// alert("Wiadomość");

// let imie = prompt("Podaj imie: ", "imie");

// confirm("czy twój piekielnik ma powyżej 20cm?")

// if (imie == "Kuba"){
//     document.write("Kuba")
// }

// let cos = prompt("Podaj coś")

// if (isNaN(cos)){
//         imie.innerHTML = "nie liczba"
// }
// else{
//         imie.innerHTML = "liczba"
//     }

// imie.innerHTML = cos.charCodeAt(0)

// switch (cos){
//     case "tak":
//         imie.innerHTML = "tak";
//         break;
//     case "Kuba":
//         imie.innerHTML = "kolega";
//         break;
//     default:
//         imie.innerHTML = "nieznajomy"
// }

// let imie = document.getElementById("imie")

// let cos = prompt("Poddaj sie")

function CzyParzysta(){
    let liczba = document.getElementById("liczba")
    let info = document.getElementById("info")
    switch (parseInt(liczba.value) % 2){
        case 0:
            info.innerText = "liczba parzysta"
            break;
        case 1:
            info.innerText = "liczba nie parzysta"
            break;
        default:
            info.innerText = "nie podałeś liczby"
    }
}

function WypiszLiczby(){
    let temp = "";
    for (i = 0; i <= 10; i++){
        temp += i + "\n";
    }
    alert(temp)
}

function Potegowanie(){
    let liczba = prompt("Podaj liczbę: ","")
    let potega = prompt("Podaj potęgę: ","")
    let pierwotna = liczba;
    for (i=1; i < potega; i++){
        liczba *= pierwotna
    }
    alert(liczba)
}