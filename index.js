const myInfos = require("./information");

const cowsay = require("cowsay");

let cowText = `Hi ${myInfos.name} from ${myInfos.campus}!`

console.log(cowsay.say({
    text : cowText,
    e : "oO",
    T : "U "
}));