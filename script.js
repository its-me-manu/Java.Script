function ConstructApple(a,b,c)
	{
		
		this.color = a;
		this.width = b;
		this.height = c;
	}

ConstructApple.prototype={
	eat: function()
			{
				return "Eat that Apple";
			},
	throw:function()
			{
				return "Throw that Apple";
			},
	nibble:function()
			{
				return "Nibble Like a Harmster";
			}
	}
	
	var apple = new ConstructApple("red",100,150);
 	var apple1 = new ConstructApple("green",150,250);
 	var apple2 = new ConstructApple("white",200,300);
 		document.getElementById("demo").innerHTML =apple.color+" Color Apple";
   		document.getElementById("demo1").innerHTML ="Width : "+apple.width;
   		document.getElementById("demo2").innerHTML ="Height : "+apple.height;
   		document.getElementById("demo3").innerHTML =apple.eat();
   		
   		document.getElementById("demo4").innerHTML =apple1.color+" Color Apple";
   		document.getElementById("demo5").innerHTML ="Width : "+apple1.width;
   		document.getElementById("demo6").innerHTML ="Height : "+apple1.height;
   		document.getElementById("demo7").innerHTML =apple1.throw();
   		
   		document.getElementById("demo8").innerHTML =apple2.color+" Color Apple";
   		document.getElementById("demo9").innerHTML ="Width : "+apple2.width;
   		document.getElementById("demo10").innerHTML ="Height : "+apple2.height;
   		document.getElementById("demo11").innerHTML =apple2.nibble();
    		
