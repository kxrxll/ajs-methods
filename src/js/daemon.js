import Character from './character';

class Daemon extends Character {
  constructor(
    name,
    type = 'Daemon',
    health,
    level,
    attack = 10,
    defence = 40,
  ) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}

export default Daemon;
