

 
var bird;
var pipes =[];
var count =0;
var high =0;

function setup()
{
	let c=createCanvas(750,500);
  c.position(100,145)
	bird = new Bird();
	pipes.push(new Pipe());
}

function draw()
{
	
	background(0);
    bird.update();
   bird.show(0,0,255);
   if (frameCount%60==0 && lift== -10)
   {
   	  pipes.push(new Pipe)
   }
  if (bird.y>height-10)
     endGame();


   for (let i=pipes.length -1;i>-1;i--)
   {
   	  pipes[i].update()
   	  pipes[i].show()
   	  if (pipes[i].x <-20)
   	  	pipes.splice(i,1);
   	  pipes[i].hit(bird)
      pipes[i].score();
     }
   if (count>high)
    high=count;
 document.getElementById("score").innerHTML = "Score : " + count;
 document.getElementById("highscore").innerHTML = "Your Highscore = " + high; 

 
}

function keyPressed()
{
	if (key == " ")
		bird.up();
}

function endGame()
{ 
bird.show(255,0,0)


  bird.gravity =0;
  bird.vel = 0;
  lift=0;
  
  for ( let i=0;i<pipes.length;i++)
    pipes[i].speed = 0;
  (document.getElementById("b")).style.display = "block";
 

}

