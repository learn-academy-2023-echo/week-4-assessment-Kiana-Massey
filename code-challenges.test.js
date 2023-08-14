// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]

describe("shuffle", () => {
  it("removes the first item from the array and shuffles the remaining content.", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"];
      expect(shuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
      const colors2 = [
        "chartreuse",
        "indigo",
        "periwinkle",
        "ochre",
        "aquamarine",
        "saffron"
      ]
      expect(shuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
  })
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

// Pseudo code:
// create a functions using an array as a parameter
// remove the first item from the array using the .shift method
// utilize a for loop to iterate thru the array and use i to initialize the last index
// use math.floor and math.random to generate a random index between 0 and current value of i.
// destructure array to swap elements at indices i and j to shuffle the loop
// return the array


const shuffle = (array) => {
  array.shift();
  
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  
  return array;
}

// Test Suites: 1 passed, 1 total
// Tests: 1 passed, 1 total

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31


describe("endTally", () => {
  it("returns the end tally", () => {
    const votes1 = { upVotes: 13, downVotes: 2 };
      expect(endTally(votes1)).toEqual(11)
      const votes2 = { upVotes: 2, downVotes: 33 };
      expect(endTally(votes2)).toEqual(-31)
    })
  })


// b) Create the function that makes the test pass.

// Pseudo code:
// create a function that takes in the object 'votes' as a parameter
// destructure to extract the values of upvotes and downvotes from the object
// subtract the number of downvotes from upvotes and return a result

const endTally = (votes) => {
  const { upVotes, downVotes } = votes;
  return upVotes - downVotes;
}

// Test Suites: 1 passed, 1 total
// Tests: 1 passed, 1 total

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe("noDuplicates", () => {
  it("returns one array with no duplicate values.", () => {
    const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"];
      const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"];
      expect(noDuplicates(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    })
  })
// b) Create the function that makes the test pass.

// Pseudo code:
// create a function that takes in the number of arrays using the rest parameter syntax
// concat on a empty array to put the elements of each array into a new array
// use New to create a new instance, use Set to remove duplicate values with the spread operator to convert values back into an array
// return values with duplicates removed


const noDuplicates = (...arrays) => {
  const mergedArray = [].concat(...arrays);
  const uniqueArray = [...new Set(mergedArray)];
  return uniqueArray;
}

// Test Suites: 1 passed, 1 total
// Tests: 1 passed, 1 total