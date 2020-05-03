var ran,wordList,ranst,jumbled,score;
wordList=[
       "abstraction","ambiguous","arithmetic","backslash","bitmap",
        "circumstance","rabbiter","radiant",
        "combination",
        "consequently",
        "consortium", "decrementing",
        "dependency",
        "disambiguate",
        "dynamic",
        "encapsulation",
        "equivalent",
        "expression",
        "facilitate",
        "fragment",
        "hexadecimal",
        "implementation",
        "indistinguishable",
        "inheritance",
        "internet",
        "java",
        "localization",
        "microprocessor",
        "navigation",
        "optimization",
        "parameter",
        "patrick",    "pickle",
        "polymorphic",
        "rigorously",
        "simultaneously",
        "specification",
        "structure",
        "lexical",
        "likewise",
        "management",
        "manipulate",
        "mathematics",
        "hotjava",
        "vertex",
        "unsigned",
        "traditional"
    ];

var random=function()
{
    
     return (Math.floor(Math.random() * 45));
};
    
    
function WordJumble(fun) {
var letter = fun;

var jumbledWord = "";

for (var i = 0; i < fun.length; i++) {
    var Chindex = Math.floor(Math.random() * letter.length);
    jumbledWord = jumbledWord + letter.charAt(Chindex);
    letter = letter.substr(0, Chindex) + letter.substr(Chindex + 1);
}

return jumbledWord;
}
var nothing=()=>{
    document.querySelector('.output').classList.remove('green');
        document.querySelector('.output').classList.remove('red');
        document.querySelector('.output').textContent="Enter word";
          console.log("Enter word");
};
var jumble=()=>{
    ran=random();
    console.log(ran);
     ranst=ran;
    console.log(wordList[ran]);
     jumbled=WordJumble(wordList[ran]);
    console.log(jumbled);
     document.querySelector('.qsn').textContent=WordJumble(wordList[ran]);
    document.querySelector('.next-btn').style.display='none';
};
var check=()=>{
    var ans=document.querySelector('.ans').value.toLowerCase();
    if(ans==wordList[ranst]){
          score=score+10;
        document.querySelector('.score').textContent=`Score:${score}`
         document.querySelector('.output').classList.add('green');
         document.querySelector('.output').classList.remove('red');
        document.querySelector('.output').textContent="Correct Answer!!";
        document.querySelector('.ans').value="";
        document.querySelector('.submit-btn').style.display='none';
        document.querySelector('.skip-btn').style.display='none';
        if(score>highscore)
            {
                highscore=score;
                document.querySelector('.highest-score').textContent=`Highest Score:${highscore}`;
                console.log(highscore);
                localStorage.setItem("highscore",highscore);
            }
        else{
            document.querySelector('.highest-score').textContent=`Highest Score:${highscore}`;
        }
      
    }
    else{
         document.querySelector('.output').classList.add('red');
         document.querySelector('.output').classList.remove('green');
        document.querySelector('.output').textContent="Wrong answer!!";
        document.querySelector('.correct').textContent=`correct answer: ${wordList[ranst]}`;
        document.querySelector('.ans').value="";
        document.querySelector('.submit-btn').style.display='none';
        document.querySelector('.skip-btn').style.display='none';
    }
};
 document.addEventListener('keypress',function(event){
        if((event.keyCode===13||event.which===13))
            {
                if(document.querySelector('.ans').value)
                    {
                        check();
                    }
                else if(!(document.querySelector('.ans').value)&&(document.querySelector('.submit-btn').style.display=='none'))
                    {
                        
                    }
                else
                    {
                        nothing();
                    }
            }
});
document.querySelector('.skip-btn').addEventListener('click',function()
{
   jumble(); 
});
document.querySelector('.next-btn').addEventListener('click',function()
{
   jumble(); 
    document.querySelector('.submit-btn').style.display='inline-block';
    document.querySelector('.skip-btn').style.display='inline-block';
    document.querySelector('.correct').textContent="";
    document.querySelector('.output').textContent="";
});
document.querySelector('.submit-btn').addEventListener('click',function()
{
    if(document.querySelector('.ans').value)
        {
            document.querySelector('.next-btn').style.display='inline-block';
            check();
        } 
    else{
        nothing();
    }
});

var init=function()
{
    if(document.querySelector('.highest-score').textContent==null){
        highscore=0;
    }
    else{
       highscore=localStorage.getItem("highscore");  
    }
    document.querySelector('.highest-score').textContent=`Highest score:${highscore}`;
  
    score=0;
    jumble();
}
init();