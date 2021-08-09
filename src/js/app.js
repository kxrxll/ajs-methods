import Character from './character';

import Bowman from './bowman';
import Swordsman from './swordsman';
import Magician from './magician';
import Undead from './undead';
import Zombie from './zombie';
import Daemon from './daemon';

const character = new Character('Василий', 'Swordsman', 80, 5, 100, 70);

const bowman = new Bowman('Леголас');
const swordsman = new Swordsman('Баромир');
const magician = new Magician('Гендальф');
const undead = new Undead('Сильвана');
const zombie = new Zombie('Гуль');
const daemon = new Daemon('Саргерас');

// eslint-disable-next-line no-console
console.log(character, bowman, swordsman, magician, undead, zombie, daemon);
