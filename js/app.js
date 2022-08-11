import { apiData } from "./api.js";
import { domData, domEvent } from "./dom.js";


const app = async () => {
    const gameData = await apiData();
    console.log(gameData);
    gameData.forEach(game => {
        const { value, question, category, answer } = game;
        
        if (game.value !==0 ) {
            domData(`$${value}`, question, category.title);
        }
        else {
            domData("Example", `Question: ${question}
            Answer: ${answer}`)
        }
    })
    domEvent(gameData);
}

app();