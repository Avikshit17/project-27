class Connection{
    constructor(a,b){
        var options={
        bodyA:a.body,
        bodyB:b.body,
        stiffness:0.04,
        length:500
        }
        this.body=Constraint.create(options);
        World.add(world,this.body);
        this.a=a;
        this.b=b;
       
    }
    display(){
    line(this.a.body.position.x,this.a.body.position.y,this.b.body.position.x,this.b.body.position.y)
    }

}