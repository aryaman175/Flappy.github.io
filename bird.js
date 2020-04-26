


lift=-10;
var count = 0;

function Bird()

{
	this.gravity =0.3
  this.y = height/2;
	this.x = 25;
    this.vel =0;
	//this.lift = -100;

    
	this.show = function(r,g,b)
	{
        fill(r,g,b)
		circle(this.x,this.y,40)
	}

	this.update = function()
	{
       
        this.vel += this.gravity  //tune velocity
        // this.vel *= 0.9
        this.y += this.vel;
      
        if (this.y>height)
        {	
        	this.y = height;
             this.vel =0;
        }

        if (this.y<0)
        {	
        	this.y = 0;
           this.vel =0; 
        }
	}

	this.up = function()
	{
		
		this.vel += lift;
		
	}
}

function Pipe()
{
	this.top = random(height/2 -20);
	this.bottom = random(height/2-10)
    this.x = width;
    this.w = 20;
    this.speed = -6;
    this.completed= false;
  
  this.hit = function(bird)
  {
     if (bird.x>this.x -20 && bird.x< this.x+this.w + 20)
    {   	if (bird.y<this.top + 20) 
         {   	
           fill(0,0,255)
            rect (this.x,0,this.w,this.top);
            endGame();
          }
  
         if (bird.y >height - this.bottom - 20)
           {   
            fill(0,0,255)
   			rect (this.x,height-this.bottom, this.w ,this.bottom);

                endGame();
             }
    }


}

  this.score = function()
  {
    if (!this.completed)
    {
      if (bird.x> this.x+this.w)
        {
          count++;
          this.completed = true;
        }
    }
  }
  
  this.show = function()
  {
  	fill(0,255,0)
  	rect (this.x,0,this.w,this.top);
  	rect (this.x,height-this.bottom, this.w ,this.bottom);
  }
  this.update = function()
  {
  	this.x += this.speed;
  }  
}


