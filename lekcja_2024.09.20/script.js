function zmien(){
    let zmienKolor = document.getElementById("kolor1").value;
    let zmienRozmiar = document.getElementById("rozmiar").value; 
    kolo.style.fill = zmienKolor;
    kolo.style.r = zmienRozmiar;
    kolo.style.stroke = document.getElementById("rama").value
}