class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = paperObject
        this.launcher= Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly(){
		this.launcher.bodyA = null;
	}
	

        display(){

        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.paperObject;
            strokeWeight(4);
            line(pointA.x, pointA.y, paperObject.x, paperObject.y);
        }

        
    }
    
}



