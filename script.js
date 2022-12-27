let dyeColor = "F9FFFE";
const wool = document.querySelectorAll('.wool');

function dyeSheep(color) {
    wool.forEach(elem => {
        elem.style.backgroundColor = color;
    });
}
dyeSheep(dyeColor);

let rotateY = -40;
let rotateX = 0;
let rotateZ = 0;

document.querySelector('.body').style.transform =
`rotateY(${rotateY}deg) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`;

function handleChoice(event) {
    const element = event.currentTarget;
    document.querySelector('.active').classList.remove('active');
    element.classList.add('active');
    dyeColor = element.dataset.color;
    dyeSheep(dyeColor);
}

const choices = document.querySelectorAll('.choice');
