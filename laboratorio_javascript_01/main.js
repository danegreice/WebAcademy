
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

let storyText = "Em uma noite de :insertx:, faziam 94 fahrenheit, Elena Gilbert conhecia um misterioso rapaz chamado :inserty:, os dois conversavam e andavam pela grama. De repente, Elena disse: :insertz:. Então, :inserty: concordou e os dois saíram a procura dela.";

let insertw = ["Bonnie Bennet", "Caroline Forbes", "Katherine Pierce"]

let insertx = ["páscoa", "natal", "ano novo"];

let inserty = ["Stefan Salvatore", "Damon Salvatore", "Klaus Mickaelson"]

let insertz = ["olha, :insertw: está bem ali", "faz tempo que não vejo :insertw:", "você viu :insertw:?"]


randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    let wItem = randomValueFromArray(insertw);
    let xItem = randomValueFromArray(insertx);
    let yItem = randomValueFromArray(inserty);
    let zItem = randomValueFromArray(insertz);
    newStory= newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    zItem = zItem.replace(":insertw:", wItem)
    newStory = newStory.replace(":insertz:", zItem);
    newStory = newStory.replace(":inserty:", yItem);


    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace("Elena Gilbert", name);
        newStory = newStory.replace("Elena", name);
    }

    if (document.getElementById("uk").checked) {
        const temperature = Math.round((94 - 32) * 0.555) + " centigrade";
        newStory = newStory.replace("94 fahrenheit", temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}