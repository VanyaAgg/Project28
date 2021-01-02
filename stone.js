class stone{
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
      this.image = loadImage ("sprites/stone.png")
        this.body = Bodies.circle(x, y,r/2,options);
    
  
        World.add(world, this.body);
        console.log(stone);
      }
      display(){
        var stonePos = this.body.position;
        translate(stonPos.x, stonePos.y);
        rotate(this.body.angle);
        fill(255,0,255);
       imageMode(CENTER);
       ellipseMode(RADIUS);
        image(this.image,0,0,this.r*2,this.r*2);
        pop()
        image(pos.x, pos.y, this.width, this.height);
        
      }
}