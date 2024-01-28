// ***************** class pokemon ***************
let pokemon1 = {
    name : "oh-Oh",
    pVie : 200,
    pAttack: 40,

    calcination(ennemi) {
        ennemi.pVie = ennemi.pVie - this.pAttack
        move(ennemi.pVie/200*100)
        console.log(this.pVie);
        console.log(this.pAttack);
    },

    PuissanceCachee(ennemi) {
        ennemi.pVie = ennemi.pVie - (this.pAttack*2)
        move(ennemi.pVie/200*100)
    },

    LanceFlemme(ennemi) {
        ennemi.pVie = ennemi.pVie - (this.pAttack -2)
        move(ennemi.pVie/200*100)
    },

    Regeneration(ennemi) {
        this.pVie = this.pVie + ennemi.pAttack
        move(ennemi.pVie/200*100)
    }

}

let pokemon2 = {
    name : "Steelix",
    pVie : 200,
    pAttack: 36,

    crocsEclair(ennemi){
        ennemi.pVie = ennemi.pVie - this.pAttack
        move2(ennemi.pVie /200*100)
        console.log(ennemi.pVie);
    },

    dracoQueue(ennemi){
        ennemi.pVie = ennemi.pVie - (this.pAttack-4)
        move2(ennemi.pVie/200*100)
        console.log(ennemi.pVie);

    },

    Recuperation(ennemi) {
        this.pVie = this.pVie + (ennemi.pAttack)*2
        move2(ennemi.pVie/200*100)
        console.log(ennemi.pVie);

    }

}


// ***************** affichage info pokemon ***************
let mouseOver = document.querySelector(".mouseOver")
let poke1Div = document.querySelector(".perso1")
let poke1DivPara1 = document.querySelector(".perso1").querySelectorAll("p")[1]

poke1Div.addEventListener("mousedown", () => {
    poke1DivPara1.innerText = `
    FIRE
    Level 78
    Speed 98
     `
    poke1Div.style.height = "350px"
    mouseOver.play()

})

poke1Div.addEventListener("mouseup", () => {
    poke1DivPara1.innerText = ""
    poke1Div.style.height = "200px"
    mouseOver.play()

})

let poke2Div = document.querySelector(".perso2")
let poke2DivPara1 = document.querySelector(".perso2").querySelectorAll("p")[1]
let imgSteelix = document.querySelector(".persoChange")
let imgOh = document.querySelector(".persoChange2")

poke2Div.addEventListener("mousedown", () => {
    poke2DivPara1.innerText = `
    STONE
    Level 75
    Speed 88
     `
    poke2Div.style.height = "350px"
    mouseOver.play()

    imgSteelix.src = "./public/src/poke/steelix-dos.gif"
    imgOh.src = "./public/src/poke/pigeon.gif"

})


poke2Div.addEventListener("mouseup", () => {
    poke2DivPara1.innerText = ""
    poke2Div.style.height = "200px"

    mouseOver.play()

})

// ***************** start button ***************

let startButton = document.querySelector('.buttonStart').querySelector("button")
let section2 = document.querySelector(".section2")
let section1 = document.querySelector("section")
let body = document.querySelector("body")

let audioTest2 = document.querySelector('.audioStart')

startButton.addEventListener("click", () => {
    section2.style.display = "block"
    section1.style.display = "none"
    body.style.backgroundColor = "black"
    body.style.backgroundImage = "none"

    audioTest2.play()
    audioTest2.volume = "0.05"
    
})

// ***************** pokemon progressBar ***************

let progressBar = document.querySelectorAll(".progressBar")[1]

let i = 0;

function move(quantity) {
  if (i == 0) {
    i = 1;
    let elem = progressBar
    let width = 0;
    let id = setInterval(frame, 1);
    function frame() {
      if (width >= quantity) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";

      }
    }
  }
}

let progressBar2 = document.querySelectorAll(".progressBar")[0]

let j = 0;

function move2(quantity) {
  if (j == 0) {
    j = 1;
    let elem2 = progressBar2
    let width = 0;
    let id = setInterval(frame, 1);
    function frame() {
      if (width >= quantity) {
        clearInterval(id);
        j = 0;
      } else {
        width++;
        elem2.style.width = width + "%";
      }
    }
  }
}


// ***************** random attack ***************

let listAttack = ["attack1", "attack2", "attack3"]


function randomPoke() {
    return Math.floor(Math.random()*listAttack.length) 
    
}

// ***************** pokemon attack1 ***************
let audioTest = document.querySelector('audio')
let audio3win = document.querySelector('.win')
let buttonAttack1 = document.querySelector(".attaque")
let buttonAttack2 = document.querySelectorAll(".attaque")[1]
let buttonAttack3 = document.querySelectorAll(".attaque")[2]
let buttonAttack4 = document.querySelectorAll(".attaque")[3]
let gameOver = document.querySelector(".gOver")
let attackAffichage = document.querySelector(".attackAffichage")
let section3 = document.querySelectorAll('section')[2]

buttonAttack1.addEventListener("click", () => {
    
    if (pokemon1.pVie > 0 && pokemon2.pVie > 0) {
        audioTest.play()
        pokemon1.calcination(pokemon2)
        attackAffichage.innerText = `CALCINATION ATTACK
        PV -----> ${pokemon1.pVie}
        PV -----> ${pokemon2.pVie}`

        switch (listAttack[randomPoke()]) {
            case "attack1":
                pokemon2.crocsEclair(pokemon1)
                attackAffichage.innerText = `crocsEclair
                
                Oh-Oh PV   -----> ${pokemon1.pVie}

                Steelix PV -----> ${pokemon2.pVie}`

            case "attack2":
                pokemon2.dracoQueue(pokemon1)
                attackAffichage.innerText =  `dracoQueue
                
                Oh-Oh PV   -----> ${pokemon1.pVie}

                Steelix PV -----> ${pokemon2.pVie}`
                break;

            case "attack3":
                pokemon2.Recuperation(pokemon1)
                attackAffichage.innerText = `Recuperation
                Oh-Oh PV   -----> ${pokemon1.pVie}

                Steelix PV -----> ${pokemon2.pVie}`
                break;
        
            default:
                break;
        }

    } else if (pokemon1.pVie < pokemon2.pVie) {
        gameOver.play()
        audioTest2.pause()
        audioTest.pause()
        section2.style.display ="none"
        section3.style.display ="block"
        

    } else {
        
        audio3win.play()
        audioTest2.pause()
        audioTest.pause()
        section2.style.display ="none"
        section3.style.display ="block"


    }

})


// ***************** pokemon attack2 ***************
buttonAttack2.addEventListener("click", () => {
    
    if (pokemon1.pVie > 0 && pokemon2.pVie > 0) {
        audioTest.play()
        pokemon1.PuissanceCachee(pokemon2)
        attackAffichage.innerText = `PUISSANCE CACHEE ATTACK
        PV -----> ${pokemon1.pVie}
        PV -----> ${pokemon2.pVie}`

        switch (listAttack[randomPoke()]) {
            case "attack1":
                pokemon2.crocsEclair(pokemon1)
                attackAffichage.innerText = `crocsEclair ATTACK
                
                Oh-Oh PV   -----> ${pokemon1.pVie}

                Steelix PV -----> ${pokemon2.pVie}`

            case "attack2":
                pokemon2.dracoQueue(pokemon1)
                attackAffichage.innerText = `dracoQueue ATTACK
                
                Oh-Oh PV   -----> ${pokemon1.pVie}

                Steelix PV -----> ${pokemon2.pVie}`
                break;

            case "attack3":
                pokemon2.Recuperation(pokemon1)
                attackAffichage.innerText = `Recuperation

                Oh-Oh PV   -----> ${pokemon1.pVie}

                Steelix PV -----> ${pokemon2.pVie}`
                break;
        
            default:
                break;
        }

    } else if (pokemon1.pVie < pokemon2.pVie) {
        gameOver.play()
        audioTest2.pause()
        audioTest.pause()
        section2.style.display ="none"
        section3.style.display ="block"
        

    } else {
        
        audio3win.play()
        audioTest2.pause()
        audioTest.pause()
        section2.style.display ="none"
        section3.style.display ="block"


    }


})

// ***************** pokemon attack3 ***************

buttonAttack3.addEventListener("click", () => {
    
    if (pokemon1.pVie > 0 && pokemon2.pVie > 0) {
        audioTest.play()
        pokemon1.LanceFlemme(pokemon2)
        attackAffichage.innerText = `LanceFlemme ATTACK
        PV -----> ${pokemon1.pVie}
        PV -----> ${pokemon2.pVie}`

        switch (listAttack[randomPoke()]) {
            case "attack1":
                pokemon2.crocsEclair(pokemon1)
                attackAffichage.innerText = `crocsEclair ATTACK
                
                Oh-Oh PV   -----> ${pokemon1.pVie}

                Steelix PV -----> ${pokemon2.pVie}`

            case "attack2":
                pokemon2.dracoQueue(pokemon1)
                attackAffichage.innerText = `dracoQueue ATTACK
                
                Oh-Oh PV   -----> ${pokemon1.pVie}

                Steelix PV -----> ${pokemon2.pVie}`
                break;

            case "attack3":
                pokemon2.Recuperation(pokemon1)
                attackAffichage.innerText = `Recuperation

                Oh-Oh PV   -----> ${pokemon1.pVie}

                Steelix PV -----> ${pokemon2.pVie}`
                break;
        
            default:
                break;
        }

    } else if (pokemon1.pVie < pokemon2.pVie) {
        gameOver.play()
        audioTest2.pause()
        audioTest.pause()
        section2.style.display ="none"
        section3.style.display ="block"
        

    } else {
        
        audio3win.play()
        audioTest2.pause()
        audioTest.pause()
        section2.style.display ="none"
        section3.style.display ="block"


    }


})

// ***************** pokemon attack4 ***************
let regen = document.querySelector(".regen")
buttonAttack4.addEventListener("click", () => {
    
    if (pokemon1.pVie > 0 && pokemon2.pVie > 0) {
        pokemon1.Regeneration(pokemon2)
        regen.play()
        attackAffichage.innerText = `Regeneration 
        PV -----> ${pokemon1.pVie}
        PV -----> ${pokemon2.pVie}`

        switch (listAttack[randomPoke()]) {
            case "attack1":
                pokemon2.crocsEclair(pokemon1)
                attackAffichage.innerText = `crocsEclair ATTACK
                
                Oh-Oh PV   -----> ${pokemon1.pVie}

                Steelix PV -----> ${pokemon2.pVie}`

            case "attack2":
                pokemon2.dracoQueue(pokemon1)
                attackAffichage.innerText = `dracoQueue ATTACK
                
                Oh-Oh PV   -----> ${pokemon1.pVie}

                Steelix PV -----> ${pokemon2.pVie}`
                break;

            case "attack3":
                pokemon2.Recuperation(pokemon1)
                attackAffichage.innerText = `Recuperation

                Oh-Oh PV   -----> ${pokemon1.pVie}

                Steelix PV -----> ${pokemon2.pVie}`
                break;
        
            default:
                break;
        }

    } else if (pokemon1.pVie < pokemon2.pVie) {
        gameOver.play()
        audioTest2.pause()
        audioTest.pause()
        section2.style.display ="none"
        section3.style.display ="block"
        

    } else {
        
        audio3win.play()
        audioTest2.pause()
        audioTest.pause()
        section2.style.display ="none"
        section3.style.display ="block"


    }


})

// *************************************POKEMON 2 CHOICE******************

let choicePokemon



