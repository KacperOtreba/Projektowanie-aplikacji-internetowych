function Draw()
{
    let shape = document.getElementById("shape").value;
    let color = document.getElementById("color").value;
    let size = document.getElementById("size").value;
    let svg = "";
    let angle = document.getElementById("angle").value;

    switch (size)
    {
        case "small":
            size = 100
            break;
        case "medium":
            size = 200
            break;
        case "large":
            size = 300
            break;
    }

    switch (shape)
    {
        case "circle":
            svg = `<svg width="${size*2}" height="${size*2}">
                    <circle cx="${size}" cy="${size}" r="${size}" fill="${color}" stroke="black""></circle>
                </svg>`
            break;
        case "square":
            svg = `<svg width="${size*2}" height="${size*2}">
                    <rect x="${size/2}" y="${size/2}" width="${size}" height="${size}" fill="${color}" stroke="black" transform="rotate(${angle})"></rect>
                </svg>`
            break;
        case "triangle":
            svg = `<svg width="${size}" height="${size}">
                    <polygon points="1 ${size-1}, ${size/2} 1, ${size-1} ${size-1}" fill="${color}" stroke="black" transform="rotate(${angle})"></polygon>
                </svg>`
            break;
    }

    document.getElementById("SVG").innerHTML = svg;
}