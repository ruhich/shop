let ProgramShop = {
	getPrice() {return 0;},
	getWeight() {return 0;},
	getSize() {return 0;},
	getModel() {return 0;},
	getPages() {return 0;}
};

class Keyboard {
	constructor(price, size, model) {
		this.price = price
		this.size = size
		this.model = model
	}
}

Object.assign(Keyboard.prototype, ProgramShop);
Keyboard.prototype.getPrice = function() {return this.price}
Keyboard.prototype.getSize = function() {return this.size}
Keyboard.prototype.getModel = function() {return this.model}

class Mouse {
	constructor(price, model) {
		this.price = price
		this.model = model
	}
}

Object.assign(Mouse.prototype, ProgramShop);
Mouse.prototype.getPrice = function() {return this.price}
Mouse.prototype.getModel = function() {return this.model}

class Book {
	constructor(price, title, pages, language) {
		this.price = price
		this.title = title
		this.pages = pages
		this.language = language
	}
}

Object.assign(Book.prototype, ProgramShop);
Book.prototype.getPrice = function() {return this.price}
Book.prototype.getPages = function() {return this.pages}

class Laptop {
	constructor(price, model, size) {
		this.price = price
		this.model = model 
		this.size = size
	}
}

Object.assign(Laptop.prototype, ProgramShop);
Laptop.prototype.getPrice = function() {return this.price}
Laptop.prototype.getModel = function() {return this.model}
Laptop.prototype.getSize = function() {return this.size}