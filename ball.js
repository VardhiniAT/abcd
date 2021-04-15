class ball{
    constructor(x, y, radius/*,image*/){
        var options = {
            isStatic : false ,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
    this.radius = radius
    this.body = Bodies.circle(x, y, radius, options)
   // this.image = image
    this.image = loadImage("paper.png")
   // this.image.resize = 0.02
     World.add(world, this.body)



    }
      display(){
          fill(200,190,190)
          imageMode(RADIUS)
          //ellipseMode(RADIUS)
         // ellipse(this.body.position.x, this.body.position.y, this.radius)
         image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius/*, this.body.options*/)
  }  
}
