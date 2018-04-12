// Soldier
function Soldier (health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function(){
    return this.strength;
}

Soldier.prototype.receiveDamage = function(damage){
    this.health = this.health-damage;
}

// Viking
function Viking (name, health, strength, damage) {
    this.name = name;
    Soldier.call(this, health, strength);
}


Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if (this.health > 0){
        return this.name + " has received " + damage + " points of damage";
    } else {
        return this.name + " has died in act of combat";
    }}
Viking.prototype.battleCry = function(){
    return "Odin Owns You All!";
}


// Saxon
function Saxon(health, strength, damage) {
    Soldier.call(this, health, strength);
    function attack(){
        return this.strength
    }
    function receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0){
            return "A Saxon has received", damage, "points of damage";
        }
        else {
            return "A Saxon has died in combat";
        }
    }
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.receiveDamage = function(damage){
        this.health -= damage;
        if (this.health > 0){
            return "A Saxon has received " + damage + " points of damage";
        }
        else {
            return "A Saxon has died in combat";
        }
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function (viking){
    this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon){
    this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function(){
    let randomSax = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let randomVik = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let fight = this.randomSax.receiveDamage(this.randomVik.attack);
 }

//  let saxIndex = Math.floor(Math.random()*this.saxonArmy.length);
// //  let this.vikIndex = Math.floor(Math.random()*this.vikingArmy.length);

//  War.prototype = Object.create(Saxon.prototype)
//  War.prototype.constructor = War;
//  War.prototype = Object.create(Viking.prototype)
//  War.prototype.constructor = War;