class Paper {

constructor (x,y){

   


 var option ={
    restitution :0.3,
    friction:0.4,
    density :10.2
    
 }   
    this.ball = Bodies.circle(x,y,15.5,option)
    this.image= loadImage("paper.png")
  

    World.add (world,this.ball)

    

}
display(){
    fill("red")
    imageMode(CENTER)
image(this.image,this.ball.position.x,this.ball.position.y,50,50)
   

}





}

