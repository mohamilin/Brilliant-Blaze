/*
    Buatlah sebuah multidemnsional array yang berisakan nama hero 
    dan kekuatannya yang berada pada The Avengers.
        Tampilkan data tsb pada sebuah tabel kecuali nama hero yang tidak memiliki huruf a
        
    
*/

let avengers = [
    ["Iron Man", "Technology"],
    ["Thor", "Godam"],
    ["Captain America", "Serum Super-Soldier"],
    ["Hulk", "Bannertech"],
    ["Black Widom", "Ninjutsu"],
    ["Hawkeye" ,"Panah"], 
    ["Winter Soldier","Cyborg"]
];

  
  function charCheck(char) {
    for(let i = 0; i<char.length; i++) {
      return !char[i].includes('a')
    }
  }



let newAvengers=avengers.filter(item=>charCheck(item));
console.table(newAvengers);