function PoemModel(data) {
  this.title = data.title || "Title";
  this.body = data.body || [];
  this.author = data.author || "Author";

  function getLength(body) {
    let counter = 0;
    for (let stanza of body) {
      for (let line of stanza) {
        counter++;
      }
    }
    return counter;
  }

  // find HTML entities in stanza lines
  function findHTMLEntities(body) {
    let entityArray = [];
    const entityTest = new RegExp(/(--)|[-']/, 'g');

    for (let i = 0; i < body.length; i++) {
      for (let j = 0; j < body[i].length; j++) {
        let instance = null;
        // RegExp.exec continues to return matches on a single string
        while ((instance = entityTest.exec(body[i][j])) != null) {
          // push stanza array index, line array index, character, and substring index
          entityArray.push([i, j, instance[0], instance["index"]]);
        }
      }
    }

    return entityArray;
  }

  function replaceAt(str, index, original, char) {
    return str.substr(0, index) + char + str.substr(index + original.length);
  }

  function normalize(body, entities) {
    // replace every instance of entityArray with the correct unicode
    // iterate through entityArray
    // at each index, replace corresponding substring with unicode
    // determine what the correct unicode is
    for (let entity of entities) {
      let instance = body[entity[0]][entity[1]];
      switch (entity[2]) {
        case '\'':
          instance = replaceAt(instance, entity[3], entity[2], '\u2019');
          break;
        case '-':
          instance = replaceAt(instance, entity[3], entity[2], '\u2013');
          break;
        case '--':
          instance = replaceAt(instance, entity[3], entity[2], '\u2014');
          break;
      }
      body[entity[0]].splice(entity[1], 1, instance);
    }
    return body;
  }

  return {
    title: this.title,
    body: normalize(this.body, findHTMLEntities(this.body)),
    length: getLength(this.body)
  }
}

export default PoemModel;
