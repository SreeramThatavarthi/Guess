var ran,tri,gameplaying;
var random=function()
{
    
     return (Math.floor(Math.random() * 100))+1;
};

var mainfun=function()
{
    var a=document.getElementById('name').value;
    if(a>=1&&a<=100)
        {
           
          if(a==ran)
              {
                  document.querySelector('.data').classList.add('green');
                  document.querySelector('.data').classList.remove('red');
                  document.querySelector('.data').textContent="Correct answer!!";
                  document.querySelector('.hint').textContent="You won the game";
                  document.querySelector('.submit').style.display='none';
                document.querySelector('.play').style.display='inline-block';
              }
            else
            {   
                
                document.querySelector('.data').classList.add('red');
                document.querySelector('.data').classList.remove('green');
                document.querySelector('.data').textContent="Wrong answer!!";
                if(Math.abs(ran-a)<=10&&Math.abs(ran-a)>=5)
                    {
                        
                        document.querySelector('.hint').textContent="Entered number is near to the answer."
                    }
                else if(Math.abs(ran-a)<=5)
                    {
                        document.querySelector('.hint').textContent="Entered number is very near to the answer."
                    }
                else if(Math.abs(ran-a)>=10&&Math.abs(ran-a)<=25)
                    {
                        document.querySelector('.hint').textContent="Entered number is far to the answer."
                    }
                else if(Math.abs(ran-a)>=25)
                    {
                        document.querySelector('.hint').textContent="Entered number is very far to the answer."
                    }
                tri=tri-1;
                document.querySelector('.rem').textContent=`Remaining : ${tri} tries`;
                if(tri==0)
                    {
                        document.querySelector('.data').classList.add('red');
                        document.querySelector('.data').classList.remove('green');
                       document.querySelector('.data').textContent="You lost the game"; 
                        document.querySelector('.submit').style.display='none';
                        document.querySelector('.play').style.display='inline-block';
                        document.querySelector('.hint').textContent=`Answer:${ran}`;
                        gameplaying=false;
                    }
            }   
        }
    else
        {
             document.querySelector('.data').textContent="";
            document.querySelector('.hint').textContent="Enter a number between 1 and 100."
        }
    document.getElementById('name').value="";
};

 document.addEventListener('keypress',function(event){
   if(gameplaying)
     {
        if((event.keyCode===13||event.which===13))
            {
                mainfun();
            }
     }
});

document.querySelector('.submit').addEventListener('click',mainfun);
document.querySelector('.play').addEventListener('click',function()                             {
    document.querySelector('.submit').style.display='inline-block';
    init();
});
var init=function()
{
    ran = random();
    tri=7;
    gameplaying=true;
     document.querySelector('.data').textContent="";
    document.querySelector('.hint').textContent="";
    document.querySelector('.play').style.display='none';
};
init();

