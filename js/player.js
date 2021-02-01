class Player {

  constructor(name, id, color, isActive = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.tokens = this.createTokens(21);
    this.isActive = isActive;
  }

  createTokens(numberOfTokens) {
    let tokens = [];
    for (let i = 0; i < numberOfTokens; i++ ) {
      let token = new Token(i, this);
      tokens.push(token);
    }
    return tokens;  
  }

}

let vit = new Player('vit', '123', 'white');
