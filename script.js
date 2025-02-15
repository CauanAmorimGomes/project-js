const body = document.getElementsByTagName("body")[0];

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const vermelho = Math.round(Math.random() * 255);
    const verde = Math.round(Math.random() * 255);
    const azul = Math.round(Math.random() * 255);

    const color = `rgb(${vermelho}, ${verde}, ${azul})`;
    body.style.backgroundColor = color;
}

randomColor();
