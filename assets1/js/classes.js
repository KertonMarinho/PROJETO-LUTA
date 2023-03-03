//knight ou  sorcerer
//LittleMonster ou bigMonster
class  character {
    _life =  1;
    maxLife  = 1;
    attack = 1;
    defens = 0;

    constructor(name) {
        this.name = name;
    }
    get life()  {  //não deixar a vida para baixo  em zero
        return this._life;
    }
    set life(newLife) { //não deixa...zero
        this._life = newLife < 0 ? 0  : newLife;
    }
}
//tipo de personagem
class knight extends character {
    constructor(name){
    //propriedade específicas do guerriro
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense  = 8;
        this.maxLife = this.life;
    }
}
class sorcerer extends character  {
    constructor(name){
        //propriedade específicas do guerriro
            super(name);
            this.life = 80;
            this.attack = 14;
            this.defense  = 3;
            this.maxLife = this.life;
}}
class   LittleMonster extends character {
    constructor() {
        super('Little Monster');
        this.life  = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;

    }
}
class   BigMonster extends character {
    constructor() {
        super('Big Monster');
        this.life  = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;

    }
}

//cenario
class Stage {  //stage=palco
    constructor(fighter1,fighter2,fighter1E1,fighter2E1,logObject) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1E1 = fighter1E1;
        this.fighter2E1 = fighter2E1;
        this.log = logObject;
    }
    //start no jogo
    start(){
        this.update();
        //evento de ataque
        this.fighter1E1.querySelector('.attackButton').addEventListener('click',()=> this.doAttack(this.fighter1,this.fighter2));
        this.fighter2E1.querySelector('.attackButton').addEventListener('click',()=> this.doAttack(this.fighter2,this.fighter1));
    }
    update(){
        //figther 1
        this.fighter1E1.querySelector('.name').innerHTML =`${this.fighter1.name}  - ${this.fighter1.life.toFixed(1)} HP`;
        let  f1pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1E1.querySelector('.bar').style.width = `${f1pct}%`;

        
        //fihther 2
        this.fighter2E1.querySelector('.name').innerHTML =`${this.fighter2.name}  - ${this.fighter2.life.toFixed(1)} HP`;
        let  f2pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2E1.querySelector('.bar').style.width = `${f2pct}%`;

      
    }
    doAttack(attacking,attacked){
        if(attacking.life <= 0 ||  attacked.life <= 0) {
            this.log.addMessage(`atacando cachorro morto`);
            return;
        }
        //fator de ataque e o fator de defesa
        let attackFactor = (Math.random() * 2).toFixed(2);
        let defenseFactor = (Math.random() * 2).toFixed(2);

        let actualAttack = attacking.attack * attackFactor;
       let actualDefense = attacked.defense  * defenseFactor;
    
        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`);
         } else {
            this.log.addMessage(`${attacked.name} consegui defender...`);
            
        }

        //atualiza na tela o hp da vida

        this.update();

    }
}
class Log {
    list  = [];
    constructor(listE1) {
        this.listE1= listE1;
    }

    addMessage(msg) {
        this.list.push(msg);
        this.render() 
    }
    render() {
        this.listE1.innerHTML = '';

        for(let i in this.list) {
            this.listE1.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}