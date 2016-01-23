var _ = require('lodash');

var data = [];
var tweetCount = 0;
function add(id, name, text) {
	data.push({ id: id, name: name, text: text, tweetid: getTweetID()});
  return _.clone(data[data.length - 1]);
}

function list() {
	return _.cloneDeep(data);
}

function find(properties) {
	return _.cloneDeep(_.filter(data, properties));
}

function getTweetID(){
	tweetCount++;
	return tweetCount.toString();
}

module.exports = {
	add: add,
	list: list,
	find: find
};

module.exports.add('@hermioneg', 'Hermione Granger', 'Go read a book @theharry');
module.exports.add('@theharry', 'Harry Potter', 'I will get you, Voldemort #chosenone');
module.exports.add('@theharry', 'Harry Potter','@malfoy is a weenie #chosenone');
module.exports.add('@malfoy', 'Draco Malfoy', 'Slytherin rocks!!!');