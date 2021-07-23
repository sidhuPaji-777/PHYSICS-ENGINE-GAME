class Chain
{
    constructor(body1, body2, offsetX, offsetY)
    {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA : body1,
            bodyB : body2,
            length: 270,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.Chain = Constraint.create(options);
        World.add(world, this.Chain);

    }

    display()
    {
        var pointA = this.Chain.bodyA.position;
        var pointB = this.Chain.bodyB.position;

        
        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;
        var Anchor2X = pointB.x+this.offsetX;
        var Anchor2Y = pointB.y+this.offsetY;

        strokeWeight(2);
        fill("Yellow");
        stroke("yellow")
        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);


    }
}