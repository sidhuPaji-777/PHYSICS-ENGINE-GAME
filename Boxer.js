class Boxer {
    constructor(x,y,width,height) {
        var options = {
            // bodyA: bodyA,
            // pointB: pointB,
            'isStatic': false,
            // 'restitution':0.8,
            // 'friction':1.0,
            // 'density':1.5
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("boxing man.png");
        World.add(world, this.body);
    }

    display(img){
        var pos =this.body.position;
        // fill(51);
        rectMode(CENTER);
        var colour = img;
        noStroke();

        if(colour="yes")
        {
            imageMode(CENTER);
            image(this.image, pos.x, pos.y, this.width*2, this.height*2);
        }
        else if(colour="no")
        {
            console.log("Ok")
        }
        // alert("BHAG YAHA SE");

        rect(pos.x, pos.y, this.width, this.height);
      }
}