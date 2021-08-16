class Slingshot{
    constructor(bodyA, ponitB){
        var options = {
            bodyA: bodyA,
            pointB: ponitB,
            stiffness: 0.04,
            length: 10
        }
        this.ponitB = ponitB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.ponitB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly(){
        this.sling.bodyA = null;
    }
    
}