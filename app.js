var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissors = document.getElementById('scissors')
var rock1 = document.getElementById('rock1')
var paper1 = document.getElementById('paper1')
var scissors1 = document.getElementById('scissors1')
var move = document.getElementById('move')
var my = document.getElementById('my')
var your = document.getElementById('your')
var vs = document.getElementById('vs')
var res = document.getElementById('res')
var tryAgain = document.getElementById('try')
var scoreC = 0
var scoreP = 0
var scorec = document.getElementById('scorec')
var scorep = document.getElementById('scorep')
var play = 0
var counter = 0
var resultat = 0

rock.addEventListener('click', () => {
    paper.style.display = 'none'
    scissors.style.display = 'none'
    move.style.display = 'none'
    my.style.display = 'block'
    your.style.display = 'block'

    rock.style.cursor = 'auto'
    play = 1
    rps()
    result()
    setTimeout(natija, 1000);
})

paper.addEventListener('click', () => {
    rock.style.display = 'none'
    scissors.style.display = 'none'
    move.style.display = 'none'
    my.style.display = 'block'
    paper.style.cursor = 'auto'

    your.style.display = 'block'
    play = 2
    rps()
    
    result()
    setTimeout(natija, 1000);
})

scissors.addEventListener('click', () => {
    paper.style.display = 'none'
    rock.style.display = 'none'
    move.style.display = 'none'
    scissors.style.cursor = 'auto'

    my.style.display = 'block'
    your.style.display = 'block'
    play = 3
    rps()
    
    result()
    setTimeout(natija, 1000);
})

function rps() {

    if (play == 3) {
        rock1.style.display = 'block'
        vs.style.display = 'block'
        counter = 1
    }
    if (play == 1) {
        paper1.style.display = 'block'
        vs.style.display = 'block'
        counter = 2
        
    }
    if (play == 2) {
        scissors1.style.display = 'block'
        vs.style.display = 'block'
        counter = 3
    }
    
}

function result() {
    if (play == counter) resultat = 3
    if (play == 1 && counter == 3) resultat = 1
    if (play == 2 && counter == 1) resultat = 1
    if (play == 3 && counter == 2) resultat = 1
    if (play == 3 && counter == 1) resultat = 2
    if (play == 1 && counter == 2) resultat = 2
    if (play == 2 && counter == 3) resultat = 2
}

function try_again() {
    tryAgain.style.display = 'block'
}

function natija() {
    if (resultat == 1){
        res.textContent = 'You Win! 🎉👏'
        setTimeout(try_again, 1000)
        scoreC += 1
        scorec.innerText = scoreC
    } 
    if (resultat == 2){
        res.textContent = 'You Lost! 🤣😂'
        setTimeout(try_again, 1000)
        scoreP += 1
        scorep.innerText = scoreP

    } 
    if (resultat == 3){
        res.textContent = 'Draw 🙌🤷‍♂️'
        setTimeout(try_again, 1000)
    }
}
tryAgain.addEventListener('click', () => {
    tryAgain.style.display = 'none'
    rock1.style.display = 'none'
    scissors1.style.display = 'none'
    paper1.style.display = 'none'
    res.textContent = 'Score'
    vs.style.display = 'none'
    your.style.display = 'none'
    my.style.display = 'none'
    rock.style.display = 'block'
    scissors.style.display = 'block'
    paper.style.display = 'block'
    move.style.display = 'block'
    rock.style.cursor = 'pointer'
    paper.style.cursor = 'pointer'
    scissors.style.cursor = 'pointer'

})
