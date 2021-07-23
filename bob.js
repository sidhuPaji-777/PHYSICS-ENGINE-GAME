class Bob
{
    constructor(x, y, radius)
    {

        var option = {
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.radius = radius;
        this.angle = 0;
        this.body = Bodies.circle(x, y, this.radius/2, option);
        // this.body = Bodies.circle(x, y, radius, option);
        World.add(world, this.body);

    }
    

    fall()
    {
        if(this.body.speed>6)
        {
            this.angle = 40;
        }
    }
    display()
    {
        var pos=this.body.position;
        this.angle=this.body.angle+20;
        push();
        translate(pos.x, pos.y);
        rotate(50);
        strokeWeight(3);
        fill(rgb(0, 153, 255));
        stroke(rgb(1, 137, 228));
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius/2, this.radius/2);
        pop();
    }



}