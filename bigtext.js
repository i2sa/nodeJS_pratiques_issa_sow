const { writeFileSync, writeSync } = require("fs");
for (i = 0; i < 10000; i++) {
  writeFileSync("bigtext.txt", `j au une longue text${i} \n`, { flag: "a" });
}
