// warning: terrible code ahead
// literally all of this is stolen from sebastian lague because im a lazy idiot and this is just a passion project
// https://seblague.github.io/ideagenerator/

let categories = {};
let recently_used = [];
let character_is_group = false;
let character_post_description = '';

window.onload = function onLoad() {
	// Store list of entries by category name
	for (let i = 0; i < category_names.length; i ++) {
		name = category_names[i];
		categories[name] = getCategory(name);
	}
}

function generate() {
	reset();
	let template = pickRandom('template');
	let result = fillInTemplate(template);
	result = formatOutput(result);
	document.getElementById("content").innerHTML = result;
}

function reset() {
	character_post_description = '';
	recently_used.length = 0;
	character_is_group = false;
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
				replacement = pickRandom('nouns');
				break;
			case 'actions-singular':
				replacement = pickRandom('actions-singular');
				break;
            case 'people':
                replacement = pickRandom('people');
                break;
            case 'places':
                replacement = pickRandom('places');
                break;
            case 'descriptor':
                replacement = pickRandom('descriptor');
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

	// pick conjugation of verb based on character being singular or multiple. E.g. (is,are)
	if (template.includes('(')) {

		let options_list = getTextBetweenTags(template, '(', ')').split(',');
		let index = (character_is_group)?1:0;
		let option = options_list[index].trim();

		template = replaceTextBetweenTags(template, option, '(', ')');
		return fillInTemplate(template)
	}

	return template;
}


// ------------------------------------ UTILITY ------------------------------------

// Returns list of lines between #category_name: and #end in the data file
function getCategory(category_name) {
	let start_tag = `#${category_name}:\n`;
	let end_tag = '\n#end';
	return getTextBetweenTags(data, start_tag, end_tag).split('\n');
}

function pickRandomOrNone(category_name, probability_exists) {
	if (randomChance(probability_exists)) {
		return pickRandom(category_name);
	}
	return '';
}

// Replace comma-separated entries inside square brackets with random entry
function resolveOptions(text) {
	if (text.includes('[')) {
		let options = getTextBetweenTags(text, '[', ']');
		let option = pickRandomFromList(options.split(','));
		text = replaceTextBetweenTags(text, option, '[', ']');
		// recursively fill in all options
		return resolveOptions(text);
	}
	return text;
}

function pickRandom(category_name) {
	
	let category = categories[category_name];
	let random_index = Math.floor(Math.random() * category.length); 
	
	// Avoid duplicates:
	let max_iterations = 5;
	for (let i = 0; i < max_iterations; i ++) {
		var result = resolveOptions(category[random_index]);
		if (recently_used.includes(result)) {
			random_index = (random_index + 1) % category.length;
		}
		else {
			recently_used.push(result);
			break;
		}
	}
	return result;
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
	result = result[0].toUpperCase() + result.substring(1, result.length); // capitalise first letter
	if (result.substr(-1) == ',') {
		result = result.substring(0, result.length -1).trim();
	}
	result = result + '.';
	result = result.replace(' ,', ',');
	return result;
}
