var locations = [{
    type: 'Anarchy Acres',
    chance: 2
  },
  {
    type: 'Dusty Divot',
    chance: 2
  },
  {
    type: 'Fatal Fields',
    chance: 2
  },
  {
    type: 'Flush Factory',
    chance: 3
  },
  {
    type: 'Greasy Grove',
    chance: 5
  },
  {
    type: 'Haunted Hills',
    chance: 5
  },
  {
    type: 'Junk Junction',
    chance: 3
  },
  {
    type: 'Lonely Lodge',
    chance: 3
  },
  {
    type: 'Loot Lake',
    chance: 5
  },
  {
    type: 'Lucky Landing',
    chance: 3
  },
  {
    type: 'Moisty Mire',
    chance: 3
  },
  {
    type: 'Old Faithful',
    chance: 2
  },
  {
    type: 'Pleasant Park',
    chance: 5
  },
  {
    type: 'Prison',
    chance: 5
  },
  {
    type: 'Retail Row',
    chance: 5
  },
  {
    type: 'Risky Reels',
    chance: 5
  },
  {
    type: 'Salty Springs',
    chance: 5
  },
  {
    type: 'Shifty Shafts',
    chance: 2
  },
  {
    type: 'Snobby Shores',
    chance: 5
  },
  {
    type: 'Tilted Towers',
    chance: 25
  },
  {
    type: 'Tomato Town',
    chance: 3
  },
  {
    type: 'Wailing Woods',
    chance: 2,
  }
];

var array = [];
console.log(array)

locations.forEach((item) => {
  var chance = item.chance;
  for (var j = 0; j < chance; j++) {
    array.push(item.type);
  }
})

function locationPicker() {

  var idx = Math.floor(Math.random() * array.length);
  console.log(array[idx]);

  document.getElementById("location").innerHTML = array[idx];
  document.getElementById("location").classList.add('animated', 'infinite', 'tada');

}
