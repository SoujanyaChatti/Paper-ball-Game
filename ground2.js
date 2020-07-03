class Groundd{
    constructor(x,y,width,height){
    var options={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body);
    this.width=width;
    this.height=height;
    }
    display(){
        var po=this.body.position;
        rectMode(CENTER);
        fill("black");
        rect(po.x,po.y,this.width,this.height);
    }
    
    }