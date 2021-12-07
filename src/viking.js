// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }

}

// Viking
class Viking extends Soldier {
  
  
constructor(name, health, strength) {
  super(health, strength);  
  this.name = name
}

battleCry() {
  return "Odin Owns You All!"
}

receiveDamage(damage) {
  this.health -= damage;
  return this.health > 0
  ? `${this.name} has received ${damage} points of damage`
  : `${this.name} has died in act of combat`;
}

}

// Saxon
class Saxon extends Soldier {
  
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0
    ? `A Saxon has received ${damage} points of damage`
    : "A Saxon has died in combat"
  }

}

// War
class War {
  
  constructor() {  
  this.vikingArmy = [];
  this.saxonArmy = [];
  }

  addViking(viking) {    
    this.vikingArmy.push(viking);
  };

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let random1 = Math.floor(Math.random()*this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[random1];
    let random2 = Math.floor(Math.random()*this.vikingArmy.length);
    let randomViking = this.vikingArmy[random2];
    let saxonDamaged = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0) this.saxonArmy.splice(random1,1);
    return saxonDamaged;
  }

  saxonAttack() {
    let random1 = Math.floor(Math.random()*this.vikingArmy.length);
    let randomViking = this.vikingArmy[random1];
    let random2 = Math.floor(Math.random()*this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[random2]; 
    let vikingDamaged = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0) this.vikingArmy.splice(random1,1);
    return vikingDamaged; 
  }
  showStatus() {
    if (!this.saxonArmy.length) {
      return "Vikings have won the war of the century!";
    } else if (!this.vikingArmy.length) {
        return "Saxons have fought for their lives and survived another day...";
    } else if (this.vikingArmy.length >=1 && this.saxonArmy.length >=1) {
      return  "Vikings and Saxons are still in the thick of battle.";
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
