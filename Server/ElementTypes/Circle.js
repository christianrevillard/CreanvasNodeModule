/**
 * All elementType must have a 'type' property
 * Circle element
 * How to define an element as a circle?
 */

var CircleElement = function(element, radius) {
	this.parent = element;
	this.radius = radius;
};

CircleElement.prototype.getBoundaryBox  = function()
{
	// missing: scale.
	return {
		left: this.parent.position.x - this.radius,
		right: this.parent.position.x + this.radius,
		top: this.parent.position.y - this.radius,
		bottom: this.parent.position.y + this.radius
	};
};

var applyTo = function(element, circleData) {
	
	console.log("circle.applyTo: " + element.id);				

//	element.elementType = "circle";
	element.elementType = element.circle = new CircleElement(element, circleData.radius);						
	
	element.box = {};
	element.box.top = -element.circle.radius;
	element.box.left = -element.circle.radius;
	element.box.bottom = element.circle.radius;
	element.box.right = element.circle.radius;
	element.box.width = 2*element.circle.radius;
	element.box.height = 2*element.circle.radius;

	element.boundaryBox = element.getBoundaryBox(element.position);
};

exports.applyTo = applyTo;