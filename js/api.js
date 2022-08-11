
const baseUrl = "https://jservice.kenzie.academy/api/";
const endpointRandomClue = "random-clue";
const endpointCategoryId = "clues?category="
const cluesIndexs = [];
const numOfGame = 9; // changing this over 99 will result in infinate loops
const gameData = [];
let __game = false; // changing this will result in infinate loops

export const apiData =  async () => {
    const randomCategoryData = await getRandomGames();
    for (const game of cluesIndexs) {
        gameData.push(randomCategoryData.clues[game])
    }
    return gameData;
}

const getRandomClue = async () => {
    const randomClue = await fetch (`${baseUrl}${endpointRandomClue}`);
    const randomClueData = await randomClue.json();
    return randomClueData;
}

const getRandomClueCategory = async (id) => {
    const randomCategory = await fetch (`${baseUrl}${endpointCategoryId}${id}`);
    const randomCategoryData = await randomCategory.json();
    return randomCategoryData;
}

const getRandomGames = async () => {
    while (!__game) {
        const randomClueData = await getRandomClue();
        const categoryId = randomClueData.categoryId;
        const randomCategoryData = await getRandomClueCategory(categoryId);
        if (randomCategoryData.clues.length > numOfGame) {
            let thisgame = Math.floor(Math.random() * randomCategoryData.clues.length);
            for (let index = 0; index < numOfGame; index++) {
                while(cluesIndexs.indexOf(thisgame)!=-1){
                thisgame = Math.floor(Math.random() * randomCategoryData.clues.length);
                }
            cluesIndexs.push(thisgame);
            }
            __game = true;
            return randomCategoryData
        }
        else {
            __game = false
        }
    }
    return randomCategoryData
}







