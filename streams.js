// Streams are a way to read/write data without reading the whole file at once.

const fs = require("fs");
// read stream to read data
const readStream = fs.createReadStream("./data/largedemodata.txt", {
  encoding: "utf-8",
});
// write stream creates a file or overrides existing file

const writeStream = fs.createWriteStream("./data/writestreamdemo.txt");

// readStream.on("data", (chunk) => {
//   console.log("----NEW CHUNK----");
//   console.log(chunk);
//   console.log("\n");
//   writeStream.write(chunk);
// });

// Piping- creating a pipe from readStream to writeStream directly.
readStream.pipe(writeStream);
