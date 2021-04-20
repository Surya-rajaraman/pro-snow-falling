class createSnow{
    constructor(x,y,r){
        var options = {
            friction: 0.001,
            restitution:0.4           
        }
        this.snow = Bodies.circle(x,y,r,options)
        this.snowImg = loadImage("snow5.webp")
        this.radius = r;
        World.add(world, this.snow);
    }

    

    showDrop(){
       // fill("white")
       // ellipseMode(CENTER);
       // ellipse(this.snow.position.x,this.snow.position.y,this.radius,this.radius);
      var pos = this.snow.position;
      var angle = this.snow.angle;
       push ();
       translate(pos.x,pos.y);
       rotate(angle)
        imageMode(CENTER);
       image(this.snowImg, 0,0,this.radius*2,this.radius*2);
       pop ();
    }
}