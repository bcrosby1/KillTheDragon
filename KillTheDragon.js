slaying = true
youHit = (Math.floor() * 2)
damagethisround = Math.floor(Math.random()*5 + 1) 
totalDamage = 0
var slaying = true;
while (slaying) {
  if (youHit) {
      console.log("You hit!");
      totalDamage += damagethisround;
          if (totalDamage >= 4) {
              console.log("You have slain the dragon and saved the city!!!");
              slaying = false;
          } else {
              youHit = Math.floor(Math.random() * 2);
          }
  } else {
      console.log("You have been killed by the dragon!! :S");
      slaying = false;
  }
}