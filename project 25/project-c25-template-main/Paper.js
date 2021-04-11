class Paper{
	constructor(x,y,r){
		var options = {
			isStatic:false,
			'density':1.2,
			'friction': 0,
			'restitution':0.3
		}
		
   
	// assign options to the rubber ball
		this.x=40
		this.y=20
		this.r=30
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
        this.image = loadImage("paper.png");
	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			ellipse(0,0,this.r,this.r);
			imageMode(CENTER);
			
            image(this.image, 0, 0, this.width, this.height);
			pop()
	}

}