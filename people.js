let people = ["Inder", "rohan", "karan", "sulesh"];

console.log("I am running this file in people " + people);

const printPeople = () => {
  for (let a of people) {
    console.log(a);
  }
};
module.exports = printPeople;
