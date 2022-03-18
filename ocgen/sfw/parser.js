// warning: terrible code ahead
// literally all of this is stolen from sebastian lague because im a lazy idiot and this is just a passion project
// https://seblague.github.io/ideagenerator/

let categories = {};
let recently_used = [];

window.onload = function onLoad() {
	// Store list of entries by category name
	total = 1;
	for (let i = 0; i < category_names.length; i ++) {
		let name = category_names[i];
		categories[name] = getCategory(name);
		console.log(name + ": " + categories[name].length.toString());
		total = total*(2^categories[name].length);
	}
	console.log("TOTAL POSSIBLE COMBINATIONS: " + total.toString());
	console.log("hello inspect element users :)");
}

function generate() {
	let template = pickRandom('template');
	let result = fillInTemplate(template);
	result = formatOutput(result);
	document.getElementById("content").innerText = "Draw your OC " + result;
}


function fillInTemplate(template) {
	// @ symbol represents a generator. So '@character@', for example,
	// should be replaced with a call to the generateCharacter function
        if (template.includes('@')) {
            let command = getTextBetweenTags(template, '@', '@');
            let replacement = 'NO REPLACEMENT FOUND';
            let generator = command.split(':')[0];
            let parameters = [];
            if (command.includes(':')) {
                parameters = command.split(':')[1].split(',');
            }
            switch (generator) {
                case 'template':
                    replacement = pickRandom('template');
                    break;
                case 'nouns':
                    replacement = genplural(parameters,'nouns');
                    break;
                case 'actions':
                    replacement = pickRandom('actions');
                    break;
                case 'actions-singular':
                    replacement = pickRandom('actions-singular');
                    break;
                case 'people':
                    replacement = genplural(parameters,'people');
                    break;
                case 'places':
                    replacement = pickRandom('places');
                    break;
                case 'descriptor':
                    replacement = pickRandom('descriptor');
                    break;
				case 'numbers':
                    replacement = processNum(pickRandom('numbers'));
                    break;
				case 'phrase':
					replacement = pickRandom('phrase');
					break;
            }
    
            template = replaceTextBetweenTags(template, replacement, '@', '@');
            // recursively fill in all generators
            return fillInTemplate(template);
        }
    
        // replace <a> with appropriate indefinite article based on context
        if (template.includes('<')) {
            let first_word = template.substring(template.indexOf('>') + 2);
            let replacement = indefiniteArticle(first_word);
            template = replaceTextBetweenTags(template, replacement, '<', '>');
            // recursively fill in all commands
            return fillInTemplate(template);
        }
	

	return template;
}

function genplural(parameters,category) {
	let use_modifers = parameters.includes('plural');
	if (use_modifers) {
		return pluralize(pickRandom(category));
	}
	return pickRandom(category);
}

// ------------------------------------ UTILITY ------------------------------------

// Returns list of lines between #category_name: and #end in the data file
function getCategory(category_name) {
	let start_tag = `#${category_name}:\n`;
	let end_tag = '\n#end';
	return getTextBetweenTags(data, start_tag, end_tag).split('\n');
}

// Replace comma-separated entries inside square brackets with random entry
function resolveOptions(text) {
	while (text.includes('[')) {
		let options = getTextBetweenTags(text, '[', ']');
		let option = pickRandomFromList(options.split(','));
		text = replaceTextBetweenTags(text, option, '[', ']');
		// recursively fill in all options
	}
	return text;
}

function pickRandom(category_name) {
	
	let category = categories[category_name];
	let random_index = Math.floor(Math.random() * category.length); 
	return resolveOptions(category[random_index]);
}

function getTextBetweenTags(text, start_tag, end_tag) {
	return text.split(start_tag)[1].split(end_tag)[0];
}

// Note: must handle start and end tags being identical
function replaceTextBetweenTags(text, replacement, start_tag, end_tag) {
	let start_index = text.indexOf(start_tag);
	let end_index = start_index + text.substring(start_index + 1).indexOf(end_tag);
	return text.substring(0, start_index) + replacement + text.substring(end_index + 2);
}

function pickRandomFromList(list) {
	let random_index = Math.floor(Math.random() * list.length); 
	return list[random_index];
}

function randomChance(probability) {
	return Math.random() < probability;
}

function processNum(string) {
	// this is so broken ill fix it later

	/*if (string.length > 4)
	{
		return string.substr(0,string.length-3) + ',' + string.substr(-3);
	}
	if (string.length > 7)
	{
		return string.substr(0,string.length-6) + ',' + string.substr(string.length-6,string.length-4) + ',' + string.substr(-3);
	}*/

	return string;
}
// Returns indefinite article for given word.
// Exceptions will need to be added if words are added to the word list.
// TODO: Maybe replace with this?: http://home.nerbonne.org/A-vs-An/
function indefiniteArticle(word) {
	word = word.trim();

	// exceptions:
	if (word.startsWith('one') || word.startsWith('uni')) {
		return 'a';
	}

	//return 'an' if word starts with vowel, otherwise 'a'
	let vowels = 'aeiou';
	if (vowels.includes(word[0])) {
		return 'an';
	}
	
	return 'a';
}


function formatOutput(result) {
	result = result.trim();
	result = result.replace(/ +(?= )/g,''); // replace multiple spaces with single space
	result = result.replace(' -', '-'); // remove accidental space between hyphenated words
	result = result.replace('- ', '-');
	if (result.substr(-1) == ',') {
		result = result.substring(0, result.length -1).trim();
	}
	result = result + '.';
	result = result.replace(' ,', ',');
	return result;
}

function pluralize(word) {
	// exceptions:
	inp = word;
	if (word.substr(0,6) == 'their ') {
		inp = word.substr(6);
	}
	switch (inp) {
	case 'jesus':
		return 'jesuses';
	case 'catboy':
		return 'catboys';
	case 'slice of cheese':
		return 'slices of cheese';
	case 'their thighs':
		return 'thighs';
	case 'Knuckles' || 'Tails' || 'goldfish' || 'fish':
		return inp;
	// cases that don't make sense, just put dudes
	case 'their significant other' || 'some regular dude' || 'your mom' || 'the funniest thing' || 'the entire population of America' || 'the entirety of new york' || 'the person reading this':
		return 'dudes';
	default:
		// general rules:
		if (inp.substr(0,6) == 'their ') {
			let inp = inp.substr(6);
		}
		if (inp.substr(0,4) == 'the ') {
			let inp = inp.substr(4);
		}
		if (inp.substr(-2) == 'ey') {
			return inp + 's';
		}
		if (inp.substr(-1) == 'y') {
			return inp.substring(0, inp.length-1) + 'ies';
		}
		if (inp.substr(-1) == 'h') {
			return inp + 'es';
		}
		if (inp.substr(-3) == 'man') {
			return inp.substring(0, inp.length-3) + 'men';
		}
		if (inp.substr(-5) == 'child') {
			return inp + 'ren';
		}
		if (inp.substr(-2) == 'ss') {
			return inp.substring(0, inp.length-2) + 'sses';
		}
		if (inp.substr(-2) == 'lf') {
			return inp.substring(0, inp.length-2) + 'lves';
		}

		return inp + 's';
	}
}

function pickRandomOrNone(category_name, probability_exists) {
	if (Math.random < probability_exists) {
		return pickRandom(category_name);
	}
	return '';
}
