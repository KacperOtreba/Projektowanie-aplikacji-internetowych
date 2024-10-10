function Draw(){
let svg = ""
let shape = document.getElementById("shape").value;
let size = document.getElementById("size").value;
let color = document.getElementById("color").value;
let angle = document.getElementById("angle").value;

switch(size) {
    case "small":
        size = 200
        break;
    case "medium":
        size = 400
        break;
    case "large":
        size = 600
        break;
}

switch (shape)
{
    case "circle":
        svg = `<svg width="${size * 2}px" height="${size * 2}px">
            <circle cx="${size}" cy="${size}" r=${size} fill="${color}" stroke="black"></circle>
            </svg>;`
        break;
    case "square":
        svg = `<svg width="${size*2}" height="${size*2}">
        <rect x="${size/2}" y="${size/2}" width="${size}" height="${size}" fill="${color}" stroke="black" transform="rotate(${angle})"></rect>
        </svg>`
        break;
    case "triangle":
        svg = `<svg width="${size}" height="${size}">
                <polygon points="1 ${size-1}, ${size/2} 1, ${size-1} ${size-1}" fill="${color}" stroke="black"></polygon>
            </svg>`
        break;
    default:
        
}

document.getElementById("SVG").innerHTML = svg
}