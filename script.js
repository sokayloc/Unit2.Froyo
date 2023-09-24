//vanilla,vanilla,vanilla,strawberry,coffee,coffee

const fprompt = window.prompt(
  "Enter your favorite froyo flavors",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
const arr = fprompt.split(",");
const stats = {};

for (let i = 0; i < arr.length; i++) {
  const flavor = arr[i];
  if (stats[flavor] === undefined) {
    stats[flavor] = 1;
  } else {
    stats[flavor]++;
  }
}

console.table(stats);
