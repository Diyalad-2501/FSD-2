fs = require("fs");
const shape = [{name:"circle",diameter:8},{name:"square",side:10}]
fs.writeFileSync('shape.txt',JSON.stringify(shape))
var data = fs.readFileSync("shape.txt", "UTF-8");
var s = JSON.parse(data);
fs.appendFileSync(
  "shape.txt",
  `\nPerimeter of circle ${3.14 * s[0].diameter}`,
);
fs.appendFileSync("shape.txt", `\nPerimeter of square ${4 * s[1].side}`);
