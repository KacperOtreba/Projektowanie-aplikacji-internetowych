function dodawanie(){
    let liczba1 = parseFloat(document.getElementById("liczba1").value);
    let liczba2 = parseFloat(document.getElementById("liczba2").value);
    let suma = liczba1 -+- liczba2;
    document.getElementById("suma").innerText = suma;
}
// function formularz(){
//     let a = document.getElementById("1").value;
//     let b = document.getElementById("2").value;
//     let pole = a * b;
//     let wynik = document.getElementById("wynik");
//     wynik.innerText = "Wynik to: " + pole;
// }

// function formularz2(){
//     let f = document.getElementsByName("radio");
//     let v;
//     for (i = 0; i < f.length; i++){
//         if (f[i].checked){
//             v = f[i].value;
//         }
//     }
//     alert(v);
// }

// function formularz3(){
//     let f = document.getElementsByName("ptaki");
//     let v = '';
//     for (i = 0; i < f.length; i++){
//         if (f[i].checked){
//             v = v+" "+ f[i].value;
//         }
//     }
//     if (v==''){
//         v="Nie zaznaczyłeś";
//     }
//     alert(v);
// }

// function formularz4(){
//     let s = document.getElementById("zwierz");
//     alert("Wartośc wybranej opcji to: " + s.value);
//     alert("Indeks wybranej rzeczy to: " + s.selectedIndex);
//     alert("Długość selecta to: " + s.length);
// }