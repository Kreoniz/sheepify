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

const sheepBody = document.querySelector('.body');
sheepBody.style.transform =
`rotateY(${rotateY}deg) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`;

function handleChoice(event) {
    const element = event.currentTarget;
    if (element.classList.contains('dye')) {
        if (wool[0].classList.contains('jeb_')) {
            document.querySelector('.name').style.display = "none";
            wool.forEach(woolElement => {
                woolElement.classList.remove('jeb_');
            });
        }
        dyeColor = element.dataset.color;
        dyeSheep(dyeColor);
    } else {
        document.querySelector('.name').style.display = "block";
        wool.forEach(woolElement => {
            woolElement.classList.add('jeb_');
        });
    }

    document.querySelector('.active').classList.remove('active');
    element.classList.add('active');
}

const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
    choice.addEventListener('click', handleChoice, true);
});

const rotateButton = document.querySelector('#rotate');
rotateButton.addEventListener('click', e => {
    if (e.target.textContent == 'Rotate!') {
        e.target.textContent = 'Stop!';
        sheepBody.style.animationPlayState = 'running';
    } else if (e.target.textContent == 'Stop!') {
        e.target.textContent = 'Rotate!';
        sheepBody.style.animationPlayState = 'paused';
    }
});
