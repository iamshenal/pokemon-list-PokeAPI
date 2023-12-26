// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png;

const container = document.querySelector('#container');
const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


for (let i = 1; i <= 144; i++){
    const div = document.createElement('div');
    div.classList.add('pokemon')
    const textImg = document.createElement('span');
    textImg.innerText = `#${i}`
    const newImg = document.createElement('img');
    newImg.src = `${imgURL}${i}.png`;

    div.appendChild(newImg);
    div.appendChild(textImg);
    container.appendChild(div);
}