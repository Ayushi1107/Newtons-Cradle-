class Bob {
    constructor(x, y,RADIUS) {
    var options = {
      'isStatic':false,
        'restitution':0.8,
            'friction':1.0,
            'density':1.2
          

    }
    this.x=x
    this.y=y
    
    
  

    this.body = Bodies.circle(x, y,20,options);
    
      
      World.add(world, this.body);
    }

 display(){
    var pos =this.body.position;
    //var angle=this.body.angle;
    push ();
    translate(pos.x,pos.y)
    //rotate(angle);
    ellipseMode(RADIUS);
    fill("blue");
    ellipse(0,0,20,20)
    pop();
  
 } 
};
 