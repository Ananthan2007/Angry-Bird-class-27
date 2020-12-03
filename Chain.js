class Chain {

  constructor (bodyA,bodyB){
   
    var options = {

      bodyA : bodyA,
      bodyB : bodyB,
      stiffness : 0.04,
      length : 10

    }

    this.Chain = Constraint.create(options)
    World.add(world,this.Chain)

  } 

display (){

var bodyA = this.Chain.bodyA.position
var bodyB = this.Chain.bodyB.position
strokeWeight (5)
line (bodyA.x,bodyA.y,bodyB.x,bodyB.y)


}


}