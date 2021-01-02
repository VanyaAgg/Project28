
  
class ground {
    
    constructor (x,y,width,height){
        
        
        this.w = w;
        this.h=h;
        this.x = x;
        this.y = y;

        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true})

        World.add (world,this.body);
    }
    display(){
        var groundPos = this.body.position;
        push()
        translate(groundPos.x,groundPos.y);
        rectMode (CENTER)
        fill(128,128,128);
        rect(0,0,this.w,this.h);
        pop()
    }
}