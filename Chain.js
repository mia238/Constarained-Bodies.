class Chain{
    constructor(bodyA,bodyB){
        var options= {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness :0.04,
            length : 10,
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain)
    }
    Display() {
        var pointA =this.chain.bodyA.postion;
        var pointB =this.chain.bodyB.postion;
        strokeWeight(4); 
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}