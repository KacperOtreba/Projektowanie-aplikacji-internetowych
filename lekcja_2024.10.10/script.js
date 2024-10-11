var zdjecia = [
    ['auta1.jpg', 'Mercedes', 'Mercedesy na parkingu'],
    ['auta2.jpg', 'BMW Drifting', 'Bmw robi drift'],
    ['auta3.jpg', 'Old Alpine', 'Stare klasyczne auto'],
    ['auta4.jpg', 'Alfa romeo', 'Czerwone auto na drodze']
];


var currentIndex = 0;

function laduj() {
    zmien(0);
}

function zmien(id) {
    currentIndex = id;
    document.getElementById('zdjecie').innerHTML = '<img src="' + zdjecia[id][0] + '" />';
    document.getElementById('informacje').innerHTML = '<b>' + zdjecia[id][1] + '</b><br><i>' + zdjecia[id][2] + '</i>';
}

function nastepneZdjecie() {
    currentIndex = (currentIndex + 1) % zdjecia.length;
    zmien(currentIndex);
}

function poprzednieZdjecie() {
    currentIndex = (currentIndex - 1) % zdjecia.length;
    zmien(currentIndex);
}

window.onload = laduj;