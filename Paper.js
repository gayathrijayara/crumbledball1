class Paper{
    constructor(x,y){
        var options={
        isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
        }
    
    this.Paper=Bodies.circle(x,y,30,options)
        this.radius=30;
        World.add(world,this.Paper);
 }
 display(){
     var pos=this.Paper.position
     circle(pos.x,pos.y,30);
 }
 }