
// Initialize array
let helloArray = Array(7).fill("Hello");
console.log(helloArray.length, helloArray);

// Update array
helloArray[0] = "Hi";
helloArray[3] = "Hi";
helloArray[6] = "Hi";
console.log(helloArray.length, helloArray);

// Create and populate array with for loop
const indexTimesTen = Array(5);
for (let i = 0; i < 5; i++) indexTimesTen[i] = i * 10;
console.log(indexTimesTen.length, indexTimesTen);