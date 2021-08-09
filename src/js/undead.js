import Character from './character';

class Undead extends Character {
  constructor(
    name,
    type = 'Undead',
    health,
    level,
    attack = 25,
    defence = 25,
  ) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}

export default Undead;
