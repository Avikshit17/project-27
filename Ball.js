class Ball{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1,
           
            friction:0.8,
            density:1.2


        }
        this.body=Bodies.circle(x,y,r/2,options)
        World.add(world,this.body)
        this.r=r
        }
     display(){
         push()
         translate(this.body.position.x,this.body.position.y)
         //rotate(this.body.angle)
         ellipseMode(CENTER)
         ellipse(0,0,this.r)
         pop ()
     }
    
}
