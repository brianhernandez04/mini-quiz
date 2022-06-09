let score = 0;
let rank;
const main = document.querySelector('main');

const answer1 = prompt('Who was the first president of the United States?');
if (answer1.toUpperCase() === 'GEORGE WASHINGTON') {
    score += 1;
}
const answer2 = prompt('What is Mexicos national language?');
if (answer2.toUpperCase() === 'SPANISH') {
    score += 1;
}
const answer3 = prompt('How many states are in the USA?');
if (answer3 == '50') {
    score += 1;
}
const answer4 = prompt('Where will the world cup take place this year?');
if (answer4.toUpperCase() === 'QATAR') {
    score += 1;
}
const answer5 = prompt('What year are we currently in?');
if (answer5 == '2022') {
    score += 1;
}

if (score === 5) {
    rank = 'Gold'
} else if (score === 4 ) {
    rank = 'Silver'
} else if (score >= 1 ) {
    rank = 'Bronze'
} else{
    rank = 'None :('
}
main.innerHTML = 
    `<h2 style="color: white; text-align: center; padding: 40vh 20vw 0 20vw;"> You got ${score}/5 correct!</h2>
     <p style="color: white; text-align: center;">Crown Earned: <strong>${rank}</strong></p>`
;