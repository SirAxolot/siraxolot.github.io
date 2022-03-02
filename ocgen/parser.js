function RandInt(max) {
    return Math.floor(Math.random() * max);
}

function splitarray(inp)
{  
    var text = require("fs").readFileSync("./" + inp + ".txt").toString('utf-8');
    return text.split(",");
}

var nouns = splitarray("nouns");
var adj = splitarray("adj");
var verb = splitarray("actions");
var sentences = splitarray("sentences");

print(nouns[RandInt(nouns.length)]);
/*const myElement = document.getElementById("field");
myElement.innerText = nouns[RandInt(nouns.length)];*/
