var HoneyMakerBee = function() {
	Bee.call(this);
	this.age = 10;
	this.job = "make honey";
	this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
// here we could use Object.create(Grub.prototype) but if Bee had 
//some of its own methods, this way would not inherit them.

HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
	this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
	if (this.honeyPot > 0) {
		this.honeyPot--;
	} else {
		return;
	}
};

