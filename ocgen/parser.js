function RandInt(max) {
    return Math.floor(Math.random() * max);
}

function splitarray(inp)
{  
    var client = new XMLHttpRequest();
    let file = client.open('GET', "./ocgen/" + inp + ".txt");
    client.send();
    let text = (file).toString('utf-8');
    return text.split("\n");
}

const actions = splitarray("actions");
const nouns = splitarray("nouns");

function Refresh() {
    if (RandInt(5) == 5) 
    {
        let text = actions[RandInt(actions.length)];
        document.getElementById('output').innerHTML = text;
    } 
    else 
    {
        let text = actions[RandInt(actions.length)] + nouns[RandInt(nouns.length)];
        document.getElementById('output').innerHTML = text;
    }
}