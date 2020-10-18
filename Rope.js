class Rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetX=offsetX

    var options ={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:offsetX,y:offsetY},
        length:15,
        stiffness:0.05
    }
    this.object= Constraint.create(options)
    World.add(world,this.object)

    }
    display(){
        var posA=this.object.bodyA.position
        var posB=this.object.bodyB.position
        strokeWeight(3);
         var R1=posA.x
         var R2=posB.y

         var R3=posA.x+this.offsetX
         var R4=posA.y+this.offsetY


        line(R1,R2,R3,R4)
        
    }
}