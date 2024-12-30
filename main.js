let randomNum = parseInt(Math.random() * 100 + 1)
console.log(randomNum);

const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrhigh')
const startOver = document.querySelector('.result')

const p = document.createElement('p');

let prevguess = []
let numguess = 1
let playgame = true

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userinput.value)
        validateguess(guess);
    })
}

function validateguess(guess){
    if(isNaN(guess)){
        alert('enter a valid number')
    }
    else if(guess < 1){
        alert('enter a number greater than 1')
    }
    else if(guess > 100){
        alert('enter a number less than 100')
    }

    else{
        if(numguess === 10){
            displayguess(guess)
            displaymessage(`your turn is over. The correct answer is ${randomNum}`)
            endgane()
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if(guess === randomNum){
        displaymessage('you guessed it right !')
        endgane()
    }
    else if(guess < randomNum){
        displaymessage('the number is too low')
    }
    else if(guess > randomNum){
        displaymessage('the number is too high')
    }
}

function displayguess(guess){
    userinput.value = ' '
    guessSlot.innerHTML += `${guess} `
    numguess++;
    remaining.innerHTML = `${11 - numguess}`
}

function displaymessage(message){
    lowOrHigh.style.color = 'red'
    lowOrHigh.innerHTML = `${message}`
}

function endgane(){
    userinput.value = ''
    userinput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Play Again</h2>'
    startOver.appendChild(p);
    playgame = false;
    startgane();
}

function startgane(){
    const newgamebutton = document.querySelector('#newGame');
    newgamebutton.addEventListener('click',function(){
        randomNum = parseInt(Math.random() * 100 + 1)
        console.log(`new number to be guessed: ${randomNum}`);
        prevguess = []
        numguess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numguess}`
        lowOrHigh.innerHTML = ''
        userinput.removeAttribute('disabled')
        startOver.removeChild(p);
        playgame = true
    })
}