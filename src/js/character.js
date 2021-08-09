class Character {
  constructor(
    name,
    type,
    health = 100,
    level = 1,
    attack,
    defence,
  ) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Name should be a string with a length from 2 to 10 charecters');
    } else if (typeof type !== 'string' || !types.includes(type)) {
      throw new Error('Type should be one of listed: Bowman, Swordsman, Magician, Daemon, Undead, or Zombie');
    } else {
      this.name = name;
      this.type = type;
      this.health = health;
      this.level = level;
      this.attack = attack;
      this.defence = defence;
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Dead can not level up');
    } else {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    }
  }

  damage(pts) {
    if (this.health >= 0) {
      this.health -= pts * (1 - this.defence / 100);
    }
  }
}

export default Character;
