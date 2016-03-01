var locations = [
  "Evergreen Forest", 
  "Garden of Thall", 
  "Oblivion Sewer", 
  "Orbal Dungeon of Death", 
  "Pool of Solitude", 
  "Galadril Foundry", 
  "Ruins of Snake"
];

var weapons = [
    
    {
      name: "Crossbow Of Death", 
      range: 30,
      speed: 20,
      hp: -20,
      stats: "HP: -20, Strength: 0, Mana: 0, Range: +30, Speed: +20 "
    },
    {
      name: "Longsword of Culling",
      str: 40,
      hp: -10,
      stats: "HP: -10, Strength: +40 , Mana: 0, Range: 0 , Speed: 0 "
    },
    {
      name: "Mighty Longsword",
      str: 50,
      speed: -10,
      stats: "HP: 0, Strength: +50, Mana: 0, Range: 0, Speed: -10"
    },
    {
      name: "Shortsword of the Noob",
      str: 10,
      speed: 5,
      stats: "HP: 0, Strength: +10, Mana: 0, Range: 0, Speed: +5 "
    },
    {

      name: "Shortsword of the Calling",
      str: 20,
      hp: 20,
      speed: 20,
      stats: "HP: +20, Strength: +20, Mana: 0, Range: 0, Speed: +20"
    },
    {
      name: "Axe of Decimation",
      str: 50,
      speed: 30,
      stats: "HP: 0, Strength: +50, Mana: 0, Range: 0, Speed: +30"
    },
    {

      name: "Wand Of Justice!",
      mana: 10,
      hp: 25,
      stats: "HP: +25 , Strength: 0, Mana: +10, Range: 0, Speed: 0"
    },
    {
      name: "Blessed Soulbound Staff",
      hp: 10,
      mana: 15,
      stats: "HP: +10 , Strength: 0, Mana: +15, Range:  0, Speed: 0 "
    },
    {
      name: "Wand of Darkest Night",
      hp: -20,
      mana: 30,
      stats: "HP: -20, Strength: 0, Mana: +30, Range: 0, Speed: 0 "
    }
    
];

function Player(caste, name) {
  this.name = name;
  this.hp = 100;
  this.caste = caste;
  if(caste == "Ranger") {
    this.str = 40;
    this.mana = 10;
    this.range = 30;
    this.speed = 20;
  } else if(caste == "Warrior") {
    this.str = 60;
    this.mana = 5;
    this.range = 10;
    this.speed = 5;
  } else if(caste == "Mage") {
    this.str = 20;
    this.mana = 50;
    this.range = 20;
    this.speed = 5;
  }
}

var utils = {
  print: function(player) {
    return ("HP: " + player.hp +
            "<br>Strength: " + player.str +
            "<br>Mana: " + player.mana +
            "<br>Range: " + player.range +
            "<br>Speed: " + player.speed + "<br><br>"
           );
  },
  charPrint: function(player) {
    return ("Name: " + player.name + "<br>" +
            "Class: " + player.caste + "<br>" +
            "HP: " + player.hp + "<br>" +
            "Mana: " + player.mana + "<br>" +
            "Strength: " + player.str + "<br>" +
            "Speed: " + player.speed + "<br>" +
            "Range: " + player.range
           );
  },
  randomizer: function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  newStats: function(player, weapon) {
    if(weapon.range) {
      player.range += weapon.range;
    }  if(weapon.speed) {
      player.speed += weapon.speed;
    }  if(weapon.hp) {
      player.hp += weapon.hp;
    }  if(weapon.mana) {
      player.mana += weapon.mana;
    }  if(weapon.str) {
      player.str += weapon.str;
    }
  },
  explore: function(player) {
    var weapon = utils.randomizer(weapons);
    var weaponName = weapon.name;
    var location = utils.randomizer(locations);
    
    setTimeout(function() {
      $("#new-stats").append(player.name + " found the " + weaponName + " at the " + location + "!<br>");
      $("#new-stats").append("Weapon: " + weapon.name + ",<br>Stats: " + weapon.stats);
    }, 2000);
    setTimeout(function() {
      $("#new-stats").append('<h4>Current</h4><hr>');
      $("#new-stats").append(utils.print(player));
    }, 3000);
    setTimeout(function() {
      utils.newStats(player, weapon);
      $("#new-stats").append('<h4>New</h4><hr>')
      $("#new-stats").append(utils.print(player));
    }, 5000);
  }
};

var p = [];
$(document).ready(function() {
  $("#create-player").on("click", function() {
    var name = $("#name").val();
    var caste = $("#caste").val();
    var newPlayer = new Player(caste, name);
    $("#new-player").hide();
    $("#char-sheet").show();
    $("#explore").show();
    $("#output").append(utils.charPrint(newPlayer));
    p.push(newPlayer);
    
  });


  $("#explore").on("click", function() {
    $("#new-stats").empty();
    $("#new-stats").append("<p>Exploring...</p>");
    utils.explore(p[0]);
    console.log(p[0]);
   // utils.weaponPrint(weapon);
  });
  
});