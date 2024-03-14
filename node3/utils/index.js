import { LoremIpsum } from "lorem-ipsum";

export function createParagrafos(qtd) {

    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 15,
            min: 6
        },
        wordsPerSentence: {
            max: 16,
            min: 6
        }
    });
    let html = ``;
    for (let i = 0; i<qtd; i++){
        html += `<p>${lorem.generateParagraphs(1)}</p><br>`
    }
    return html;
}