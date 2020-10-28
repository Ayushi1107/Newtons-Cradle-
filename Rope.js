class Rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY

    var options ={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:offsetX,y:offsetY},
    }
    this.object= Constraint.create(options)
    World.add(world,this.object)

    }
    display(){
        var posA=this.object.bodyA.position
        var posB=this.object.bodyB.position
        strokeWeight(6);

        var R1=posA.x
        var R2=posA.y

         var R3=posB.x+this.offsetX
         var R4=posB.y+this.offsetY

         fill("black")

        line(R1,R2,R3,R4)
        
    }
}