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
// fs.writeFile("./data/testdata.txt", "This is writeFile function", () => {
//   console.log("File written!");
// });

//create new file
// fs.writeFile("./data/testdata2.txt", "Creating a new file", () => {
//   console.log("New File Created");
// });

//directories
if (!fs.existsSync("./assests")) {
  fs.mkdir("./assests", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Directory created");
    }
  });
} else {
  fs.rmdir("./assests", (err) => {
    console.log("folder deleted");
  });
}

//delete files
if (fs.existsSync("./data/deleteme.txt")) {
  fs.unlink("./data/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file deleted");
    }
  });
}
