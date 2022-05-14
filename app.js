// DIV ELEMENTS
var container = document.querySelector('#container');
var divs = document.querySelectorAll('div');
var div0 = document.querySelector('#div0');
var div1 = document.querySelector('#div1');
var div2 = document.querySelector('#div2');
var div3 = document.querySelector('#div3');
var selectDiv = document.querySelector('#selectdiv');
var scoreDiv = document.querySelector('#scorediv');
//DIV CLASSES
container.classList.add('container');
for (let div of divs) {
    div.classList.add('div');
}
div1.classList.add('div1');
div2.classList.add('div2');
div3.classList.add('div3');
selectDiv.classList.add('selectdiv');
scoreDiv.classList.add('scorediv');

//IMAGE ELEMENT
var img = document.querySelector('#pingpongimg');
//IMAGE CLASS
img.classList.add('img');

//SCORE ELEMENT
var score = document.querySelector('#score');
var p1 = 0;
var p2 = 0;
score.innerHTML = `${p1} - ${p2}`;
//SCORE CLASS
score.classList.add('score');

//BUTTON ELEMENTS
var player1 = document.querySelector('#player1');
var player2 = document.querySelector('#player2');
var reset = document.querySelector('#reset');
var buttons = document.querySelectorAll('input');

//BUTTON CLASSES
for (let b of buttons) {
    b.classList.add('button');
}
player1.classList.add('player1');
player2.classList.add('player2');
reset.classList.add('reset');

//BUTTON EVENT LISTENERS
player1.addEventListener('click', function () {
    p1++;
    score.innerHTML = `${p1} - ${p2}`;
    checkScore();
});
player2.addEventListener('click', function () {
    p2++;
    score.innerHTML = `${p1} - ${p2}`;
    checkScore();
});
reset.addEventListener('click', function () {
    window.location.reload();
});

//FUNCTIONS TRIGGERED ON BUTTON CLICK 
function checkScore() {
    if (p1 === parseInt(playingTo.value) || p2 === parseInt(playingTo.value)) {
        let v1 = document.createElement('span');
        let v2 = document.createElement('span');
        let score1 = document.createElement('h1');
        v1.innerText = p1;
        v2.innerText = p2;
        player1.disabled = true;
        player2.disabled = true;
        player1.classList.remove('player1');
        player2.classList.remove('player2');
        player1.classList.add('player1disabled');
        player2.classList.add('player2disabled');
        if (p1 > p2) {
            v1.style.color = 'green';
            v2.style.color = 'red';
            score1.append(v1);
            score1.append(" - ");
            score1.append(v2);
            scoreDiv.removeChild(score);
            scoreDiv.appendChild(score1);
        }
        if (p2 > p1) {
            v1.style.color = 'red';
            v2.style.color = 'green';
            score1.append(v1);
            score1.append(" - ");
            score1.append(v2);
            scoreDiv.removeChild(score);
            scoreDiv.appendChild(score1);
        }
    }
    else {
        return;
    }
}

//SELECT ELEMENT
var playingTo = document.querySelector('#playingto');
//SELECT CLASS
playingTo.classList.add('playingto');

//PARAGRAPH ELEMENT
var p0 = document.querySelector('#p0');
p0.style.fontWeight = '900';