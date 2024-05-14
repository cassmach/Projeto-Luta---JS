
/*                    Modelo POO

let log = new Log(document.querySelector('.log'));

let char = new Knight('Hero');
let monster = new LittleMonster();


const stage = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);


stage.start ()
*/

const char = createKnight('Hero');

const monster = createLittleMonster();




stage.start (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
)