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
  characterPrint: function(player) {
    return ("Name: " + player.name + "<br>" +
            "Class: " + player.caste + "<br>" +
            "HP: " + player.hp + "<br>" +
            "Strength: " + player.str + "<br>" +
            "Mana: " + player.mana + "<br>" +
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
      $("#new-stats").append("<h5>" + player.name + " found the " + weaponName + " at the " + location + "!</h5>");
      $("#new-stats").append("<span>Weapon:</span> " + weapon.name + ",<br><span>Stats:</span> " + weapon.stats + "<br><br>");
    }, 2000);
    
    setTimeout(function() {
      $("#new-stats").append('<h4>Current</h4><hr>');
      $("#new-stats").append(utils.print(player));
    }, 3000);
    
    setTimeout(function() {
      utils.newStats(player, weapon);
      $("#new-stats").append('<h4>New</h4><hr>');
      $("#new-stats").append(utils.print(player));
    }, 5000);
  }
};

var playerObjectArray = [];

$(document).ready(function() {
  
  $("#create-player").on("click", function() {
    var name = $("#name").val();
    var caste = $("#caste").val();
    var newPlayer = new Player(caste, name);
    if(!name) {
      alert("Name is required");
    } else {
      $("#new-player").hide();
      $("#char-sheet").show();
      $("#explore").show();
      $("#output").append(utils.characterPrint(newPlayer));
      playerObjectArray.push(newPlayer);
    }
  });
  
  $("#explore").on("click", function() {
    $("#new-stats").empty();
    $("#new-stats").append("<p>Exploring...</p>");
    utils.explore(playerObjectArray[0]);
    $("#output").empty();
    $("#output").append(utils.characterPrint(playerObjectArray[0]));
  });
  
});