// fs module interacts with files

const fs = require("fs");
// console.log(fs);

//read Files
// Below is asynchronous function
// fs.readFile("./data/testdata.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });
// console.log("File is read!");
// write files
// file exists
fs.writeFile("./data/testdata.txt", "This is writeFile function", () => {
  console.log("File written!");
});

//directories

//delete files
