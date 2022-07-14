import path from 'path';
import fs from 'fs-extra'

import { loadQuizes } from './loader'

const ANSWERS_FOLDER = path.join(__dirname, '../answers/');

async function buildAnswersFolder() {
    const quizes = await loadQuizes();
    try {
        // If answers folder doesn't exist create it
        if (!fs.existsSync(ANSWERS_FOLDER)) {
            fs.mkdirSync(ANSWERS_FOLDER);
        }
    } catch (err) {
        console.error(err);
        return;
    }

    for (let quiz of quizes) {
        let divider = `/******************************************************************************\n* Answer\n******************************************************************************/\n`;
        let content = `${quiz.tests}\n${divider}\n${quiz.template}\n`;
        let outputFilename = path.join(ANSWERS_FOLDER, `${quiz.path}.ts`);
        if (!fs.existsSync(outputFilename)) {
            fs.writeFileSync(outputFilename, content);
            console.log(`Generating ${outputFilename}...`)
        }
    }

    let links: string[] = [];
    for (let quiz of quizes) {
        links.push(`<a href="./answers/${quiz.path}.ts" target="_blank">${quiz.no}・${quiz.info.en?.title}</a>`);
    }
    console.log(links.join('\n\n'));
}

buildAnswersFolder()