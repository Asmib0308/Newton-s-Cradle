class Bob {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            'restitution': 0,
            'friction':1.0,
            'density':1.3
        }
        
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world, this.body);
    }
    display(){
        ellipseMode(RADIUS);
    
        ellipse(this.body.position.x, this.body.position.y, this.radius,this.radius);

    }       
};