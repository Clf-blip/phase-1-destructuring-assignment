// Animal Sounds - Split the string into an array
const farmAnimals = "cow horse sheep pig chicken";
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(" ");

// Traditional Animal Names (excluding horse)
const [bessie, , dolly, babe, little] = farmAnimals.split(" ");

// Traditional Animal Colors (cow, sheep, pig)
const [blackAndWhite, black, pink] = ["cow", "sheep", "pig"];

// Rainbow Colors
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// Rainbow Colors Using Initials, omitting indigo
const [r, o, y, g, b, , v] = colors;

// Assign only indigo using 'indg'
const [, , , , , indg] = colors;

// Muppet Object Destructuring
const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};
const { muppetName, color, song, job, partner } = muppet;

// Nested Muppet Destructuring
const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  album: {
    theMuppetMovie: {
      song1: "Rainbow Connection",
      song2: "Moving Right Along",
      song3: "Never Before, Never Again",
      song4: "I Hope That Something Better Comes Along"
    }
  },
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy"
};
const { 
  album: { theMuppetMovie: { song2, song4 } }, 
  nestedJob, 
  nestedPartner 
} = nestedMuppet;
