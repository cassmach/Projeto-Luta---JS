
/*                           Modelo POO


                //  Criação dos Status Base dos Personagem 
                class Character {

                    _life = 1;
                    maxLife = 1;
                    attack= 0;
                    defense = 0;
                            // abaixo obriga o Char a ter um nome 
                    constructor(name) {
                        this.name = name;
                    }
                    
                    get life(){
                        return this._life;
                    }   // Aqui caso ele o attack passe de 0 ele não negativo, e sim o padrão 0(morto)
                    set life(newLife)  {
                        this._life = newLife < 0 ? 0 : newLife;
                    }
                }
                
                       // Criação de classes puxando pelo Extends os Status Base
                class Knight extends Character {
                    constructor(name) {
                        super(name);
                        this.life = 100;
                        this.attack= 10;
                        this.defense= 8;
                        this.maxLife= this.life;
                    }
                }
                
                class Sorcerer extends Character {
                    constructor(name) {
                        super(name);
                        this._life = 80;
                        this.attack= 15;
                        this.defense = 3;
                        this.maxLife = this.life;
                    }
                }

                class LittleMonster extends Character {
                    constructor() {
                        super('Little Monster');
                        this.life = 40;
                        this.attack = 4;
                        this.defense = 4;
                        this.maxLife = this.life;

                    }
                }

                class BigMonster extends Character {
                    constructor() {
                        super('Big Monster');
                        this.life = 120;
                        this.attack = 16;
                        this.defense = 6;
                        this.maxLife = this.life;
                    }
                }

                class Stage {
                    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject){
                        this.fighter1 = fighter1;
                        this.fighter2 = fighter2;
                        this.fighter1El = fighter1El;
                        this.fighter2El = fighter2El;
                        this.log = logObject
                    }
                
                    start (){
                        this.update();
                        // Evento do botão de atacar.

                        this.fighter1El.querySelector('.attackButton').addEventListener('click',() => this.doAttack (this.fighter1, this.fighter2));
                        this.fighter2El.querySelector('.attackButton').addEventListener('click',() => this.doAttack (this.fighter2, this.fighter1));

                    }
                    update(){
                        // Fighter 1
                
                        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP `;
                        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
                        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;

                        // Fighter 2
                        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP `;
                        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
                        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;
                        
                
                    }


                    doAttack(attacking, attacked){
                        
                        if(attacking.life <= 0  || attacked.life <= 0){
                            this.log.addMessage(`Atacando cachorro morto.`);
                            return;
                        }

                        let attackFactor = (Math.random() * 2).toFixed(2);
                        let defenseFactor = (Math.random() * 2).toFixed(2);

                        let actualAttack = attacking.attack * attackFactor; 
                        let actualDefense = attacking.defense * defenseFactor;


                        if(actualAttack > actualDefense) {

                            attacked.life -= actualAttack;
                            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)

                        }else {
                            this.log.addMessage(`${attacked.name} conseguiu defender..`)
                        }
                        
                        this.update();
                    }
                }


                class Log {
                    list = [];

                    constructor(listEl) {
                        this.listEl = listEl;
                    }

                    addMessage(msg) {
                        this.list.push(msg);
                        this.render();
                    }

                    render(){
                        this.listEl.innerHTML = '';
                        for (let i in this.list) {
                            this.listEl.innerHTML += `<li>${this.list[i]}</li>`
                        }
                    }
                }
                */



                // Status Base do Personagem 
const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

                        // Personagem Guerreiro
const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 50,
        maxLife: 50,
        attack: 14,
        defense: 3
    }
}
                  // Little Monstro

const createLittleMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Little Monster',
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 4
    }
}
                             // Boss
const createBigMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Big Monster',
        life: 120,
        maxlife: 120,
        attack: 16,
        defense: 6
    }
}



                       // Criando o Cenário de Luta do jogo
const stage = {
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,

    start(fighter1, fighter2, fighter1El, fighter2El){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));

        this.update();
    },

    update()  {

        // Atualiza as info do Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;

        // Atualiza as info do Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`

    },

                       // Ação de Attack
    doAttack(attacking, attacked){

        if (attacking.life <= 0  || attacked.life <= 0)  {
            log.addMessage('Alguém está morto, não pode atacar')
        }

        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenseFactor = (Math.random() * 2).toFixed(2);

        const actualAttack = attacking.attack * attackFactor;
        const actualDefense = attacked.defense * defenseFactor;

        if (actualAttack > actualDefense)  {
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            log.addMessage(`${attacking.name} cansou ${actualAttack.toFixed(2)} de dano em ${attacked.name} `)


        }else {
            log.addMessage(`${attacked.name} conseguiu defender...`)
        }


        this.update();

    }

}


       // Aqui Fica o log Dos attacks   -- onde ele adiciona a mensagem e renderiza
const log = {
    list: [],
    addMessage(msg) {
        this.list.push(msg);
        this.render();
    },
    render (){
        const logEL = document.querySelector('.log');
        logEL.innerHTML = '';

        for(let i in this.list)  {
            logEL.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }

}


