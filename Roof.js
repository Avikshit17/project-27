class Roof{
    constructor(){
        var option={
            isStatic:true
        }
       this.body=Bodies.rectangle(500,100,100,20,option);
       World.add(world,this.body)
    }
    display()
    {
        push ()
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER);
        rect (0,0,100,20);  
        pop ()   
    }
}