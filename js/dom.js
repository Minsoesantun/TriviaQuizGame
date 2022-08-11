
let rowNum = 1;
let colNum = 1;
let userScore = 0;

const innerTextDom = (position,apiInfo) => {
    const elementPos = document.querySelector(position);
    elementPos.innerText = apiInfo;
}

export const domData = (frontData, backData, category) => {
    if (rowNum <=3 ) {
        innerTextDom("h2", `CATEGORY: ${category}`);
        innerTextDom(`.frow-${rowNum}-col-${colNum}`, frontData);
        innerTextDom(`.brow-${rowNum}-col-${colNum}`, backData);
        colNum+=1;
        if (colNum>3) {
            rowNum+=1;
            colNum=1;
        }
    }  
}

const cards = document.querySelectorAll(".thecard");    
export const domEvent = (gameData) => {
    for (let index = 0; index < cards.length; index++) {
        const card = cards[index];
        const input = card.querySelector("input");
        card.addEventListener("click", () => {
            card.classList.toggle("flip");
            input.addEventListener("click", (e)=>{
            e.stopPropagation();
            })
        })
        const btn = card.querySelector("button");
            btn.addEventListener("click", (e)=>{
                const answer = (input.value.trim().toLowerCase())===(gameData[index].answer.toLowerCase());
                const info = document.querySelector(".info");
                if (answer) {
                    userScore+=(gameData[index].value)
                    info.innerText = `Congratulation. Your Answer is Correct!
                    Your winning: $${userScore}`
                }
                else {
                    userScore = 0;
                    info.innerText = `Wrong Answer! You just lost all your winning!
                    Your winning: $${userScore}`
                }
            })
    }
}
