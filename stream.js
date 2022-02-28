const { createReadStream } = require("fs");
const stream = createReadStream("./bigtext.txt", "utf-8", {
  highWaterMark: 260000,
});
stream.on("data", (result) => {
  console.log(result);
});
