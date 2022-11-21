let adjArray = [];

window.onload = function onLoad() {
	adjArray = sortByLength(adj.toLowerCase().split('\n'));
}

function generate() {
	let daInput = document.getElementById("input").value;
    console.log('input:' + daInput);
    if (daInput.replace(' ', '') != '') {
        let result = process(daInput);
        document.getElementById("content").innerText = result;
    }
}

function process(inp)
{
    let inplower = inp.toLowerCase().split(' ');
    for (let i = 0; i < adjArray.length; i++)
    {
        for (let j = 0; j < inplower.length; j++)
        {
            if (inplower[j] == adjArray[i]) inplower[j] = 'SCREWED';
            if (inplower[j] + 'ing' == adjArray[i] || inplower[j].substring(0,inplower[j].length-1) + 'ing' == adjArray[i] || inplower[j].substring(0,inplower[j].length-2) + 'ing' == adjArray[i]) inplower[j] = 'SCREWing';
	    if (inplower[j].substring(inplower[j].length-1,inplower[j].length) == 's') inplower[j] = 'SCREWEDs'; 
        }
    }
    let outp = inplower.join(' ');
    return outp.trim();
}

// stolen from stackoverflow
function sortByLength(arr)
{
    return arr.sort(function(a, b) {
        return b.length - a.length || a.localeCompare(b);
    });
}
