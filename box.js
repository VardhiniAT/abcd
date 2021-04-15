class box{
    constructor(x, y,height,width){
        var options = {
            isStatic : true ,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
   // this.radius = radius
    this.body = Bodies.rectangle(x, y, height, width,options)
    this.height = height
    this.width = width
     World.add(world, this.body)

    }
      display(){
          fill("white")
          rectMode(CENTER)
          rect(this.body.position.x, this.body.position.y, this.height, this.width)
  }  
}