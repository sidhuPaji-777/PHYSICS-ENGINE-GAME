class Objects {
    constructor(x,y,width,height) {
        var options = {
            // bodyA: bodyA,
            // pointB: pointB,
            'isStatic': false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.5
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("RED");
        rect(pos.x, pos.y, this.width, this.height);
      }
}