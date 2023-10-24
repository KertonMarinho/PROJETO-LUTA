//Kinight ou Sorcerer = Guerreiro ou mago
//LittleMOnster ou Big Monster

let log = new Log(document.querySelector('.log'));
let char = new knight('Bonieky');

let monster = new BigMonster();

const  stage =new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log

);
stage.start();
