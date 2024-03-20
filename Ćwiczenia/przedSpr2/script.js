function formularz(){
    let wybor = document.getElementById("selekt");
    if (wybor.selectedIndex == 0){
        PierwszaCzyZlozona();
    }
    else if (wybor.selectedIndex == 1){
        LiterkaZTekstu();
    }
    else if (wybor.selectedIndex == 2){
        LosoweLiczby();
    }
    else if (wybor.selectedIndex == 3){
        GeneratorTabelki();
    }
}

function PierwszaCzyZlozona(){
    let number = document.getElementById("number").value;
    let p = 0;
    for (let i = 2; i < number; i++){
        if (number % i == 0){
            p++;
        }
    }
    if (p > 0){
        alert("Liczba jest złożona")
    }
    if (p == 0){
        alert("Liczba jest pierwsza")
    }
}

function LiterkaZTekstu(){
    let text = document.getElementById("text").value
    let number = document.getElementById("number").value
    let info = document.getElementById("info")
    info.textContent = text[number]
}

function LosoweLiczby(){
    let number = document.getElementById("number").value
    let info = document.getElementById("info")
    info.innerText = "";
    for (let index = 0; index < number; index++){
        info.append(parseInt(Math.random()*100) + " ")
    }
}

function GeneratorTabelki(){
    let number = document.getElementById("number").value
    document.write("<table><tr>")
    for (let index = 0; index < number; index++) {
        document.write("<td>"+"0"+"</td>")
    }
    document.write("</tr></table>")
}

function zmianakoloru(){
    let kolor = document.getElementById("kolor").value
    let body = document.getElementById("1")
    body.style.backgroundColor = kolor
}
