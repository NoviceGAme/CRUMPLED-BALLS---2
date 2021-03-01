class Dustbin {

    constructor (x,y,w,h) {
        var opt = {
           
            density:1,
            friction:1.5,
            isStatic:true
        }
     
    
        this.body = Bodies.rectangle(x,y,w,h,opt)
        this.w=w
        this.h=h
        this.color= rgb(random(0,255),random(0,255),random(0,255))
     //   this.image = loadImage("sprites/base.png")
        World.add(world,this.body)
        
    }
    
    display(){
        
      //  push();
      //  translate(this.body.position.x,this.body.position.y);
       // rotate(angle)
       // angleMode(RADIANS)
        fill(this.color)
       rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
       // pop();
    }
}