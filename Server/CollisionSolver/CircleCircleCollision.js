/*
 * Represents a collision between two circles
 */
var CircleCircleCollision = function() {		
};


CircleCircleCollision.prototype.getCollision = function(element, otherElement) {
	// expecting both to be circles, do we need to test it?	
//	var start = new Date().getTime();
	/*
	 * nee to use new-old version
	var realBox = element.getRealBox();
	var otherRealBox = otherElement.getRealBox();
	
	// broad stuff 
	if (realBox.right < otherRealBox.left)
		return { collided: false};

	if (otherRealBox.right < realBox.left)
		return { collided: false};

	if (realBox.bottom < otherRealBox.top)
		return { collided: false};

	if (otherRealBox.bottom < realBox.top)
		return { collided: false};
*/
	var collisionPoints = [];

	if (
		Math.sqrt(
			(element.position.x-otherElement.position.x)*(element.position.x-otherElement.position.x)+
			(element.position.y-otherElement.position.y)*(element.position.y-otherElement.position.y))
		<(element.circle.radius + otherElement.circle.radius))
	{
		// TODO - using same radius at the moment, ok for testing so far
		var col = { x:(otherElement.position.x+element.position.x)/2,
					y:(otherElement.position.y+element.position.y)/2};
		collisionPoints.push({x:col.x-5, y:col.y});
		collisionPoints.push({x:col.x+5, y:col.y});
	}
		
	if (collisionPoints.length < 2)
	{
		//console.log("No collision. Time: " + (new Date().getTime()-start));
		return { collided: false};
	}
	
	//console.log("Collision. Total time find+update: " + (new Date().getTime()-start));
	
	// return directly correct point, with vectors and everything. TODO
	return {
		collided: true,
		collisionPoints:collisionPoints
	};
};

exports.CircleCircleCollision = CircleCircleCollision;
