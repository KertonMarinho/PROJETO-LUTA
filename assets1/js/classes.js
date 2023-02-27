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