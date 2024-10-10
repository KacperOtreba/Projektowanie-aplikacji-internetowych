function draw()
{
    let color = document.getElementById("color").value;
    let size = document.getElementById("size").value;
    let svg = "";
    let trans = document.getElementById("trans").value;
    let input = document.getElementById("angle").value;

    if (document.getElementById("s1").checked)
    {
            svg = `<svg width="100%" height="80vh" style="text-align:center;">
                    <circle cx="${size}" cy="${size}" r="${size-1}" fill="${color}" transform="${trans}(${input})" stroke="black"></circle>
                </svg>`
    }
    else if (document.getElementById("s2").checked)
    {
        svg = `<svg width="100%" height="80vh">
                    <rect x="${size/2}" y="${size/2}" width="${size}" height="${size}" fill="${color}" transform="${trans}(${input})" stroke="black"></rect>
                </svg>`
    }

    document.getElementById("SVG").innerHTML = svg;
}