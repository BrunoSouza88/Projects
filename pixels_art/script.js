
let elementMain = document.createElement('main');
document.body.appendChild(elementMain);

let elementH1 = document.createElement('h1');
elementMain.appendChild(elementH1);
elementH1.innerText = 'Paleta de Cores';
elementH1.id = 'title';

let sectionPalettes = document.createElement('section');
elementMain.appendChild(sectionPalettes);
sectionPalettes.id = 'color-palette';

let buttonCreate = document.createElement('button');
sectionPalettes.appendChild(buttonCreate);
buttonCreate.id = 'button-random-color';
buttonCreate.innerText = 'Cores aleatórias';

let buttonClear = document.createElement('button');
sectionPalettes.appendChild(buttonClear);
buttonClear.id = 'clear-board';
buttonClear.innerText = 'Limpar';

let sectionGrid = document.createElement('section');
sectionGrid.id = 'pixel-board';
elementMain.appendChild(sectionGrid);

for (let index = 0; index < 4; index += 1) {
    let elementCirles = document.createElement('div');
    sectionPalettes.appendChild(elementCirles);
    elementCirles.className = 'color'
}

function createGrid() {
    for (let index = 0; index < 5; index += 1) {
        let pixelItem = document.createElement('div');
            sectionGrid.appendChild(pixelItem);
        for (let index2 = 0; index2 < 5; index2 +=1){
            let pixelItem2 = document.createElement('div');
            pixelItem2.className = 'pixel';
            pixelItem.appendChild(pixelItem2);
        }
    }
}

function createColor() {
    let r = Math.random() * 256;
    let g = Math.random() * 256;
    let b = Math.random() * 256;

    return `rgb(${r}, ${g}, ${b})`
}

let colorBlack = document.getElementsByClassName('color')[0]
let color2 = document.getElementsByClassName('color')[1]
let color3 = document.getElementsByClassName('color')[2]
let color4 = document.getElementsByClassName('color')[3]

function allColor() {
    colorBlack.style.backgroundColor = 'black';
    color2.style.backgroundColor = createColor();
    color3.style.backgroundColor = createColor();
    color4.style.backgroundColor = createColor();
}

buttonCreate.addEventListener('click', function () {
    allColor();
})

function giveBlackSelected() {
colorBlack.classList.add('selected');
}

function handleChangeColor(event) {
    let colorSelected = document.getElementsByClassName('selected')[0];
    colorSelected.classList.remove('selected');
    event.target.classList.add('selected')
}

colorBlack.addEventListener('click', handleChangeColor);
color2.addEventListener('click', handleChangeColor);
color3.addEventListener('click', handleChangeColor);
color4.addEventListener('click', handleChangeColor);

function holdColor(){
    let newColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
    return newColor
}

function coloring() {
    let squarePixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < squarePixels.length; index +=1){
        squarePixels[index].addEventListener('click', function(){
            squarePixels[index].style.backgroundColor = holdColor()
        })
    }
}


buttonClear.addEventListener('click', function clearBoard() {
    const clearBoard1 = document.getElementsByClassName('pixel');
    for (let index = 0; index < clearBoard1.length; index += 1) {
      clearBoard1[index].style.backgroundColor = 'white';
    }
})


// Chamada de função
createColor();
allColor();
createGrid();
giveBlackSelected();
holdColor();
coloring();
console.log(buttonClear);