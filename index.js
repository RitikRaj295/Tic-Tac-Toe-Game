let Button=document.querySelectorAll(".container>button");
let Result=document.querySelector(".scoreMsg");
let ResetBtn=document.querySelector(".resetBtn>button");

const winningPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

function disableBtn(){
    for (let button of Button){
        button.disabled=true;
    }
}


    ResetBtn.addEventListener("click",()=>{
        for (let button of Button){
            turn0=true;
            button.disabled=false;
            button.innerText="";
            Result.innerText="";
            button.style.backgroundColor="rgb(31, 30, 30";
    
        }
        

    })
   

  
function highlightingWinnigPattern(pattern){
    Button[pattern[0]].style.backgroundColor = "green";
    Button[pattern[1]].style.backgroundColor = "green";
    Button[pattern[2]].style.backgroundColor = "green";

}



const checkWinner=()=>{
    for (let pattern of winningPattern){
  
    let pos1val=Button[pattern[0]].innerText;
    let pos2val=Button[pattern[1]].innerText;
    let pos3val=Button[pattern[2]].innerText;

       if(pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val===pos2val&&pos2val===pos3val){
            Result.innerText=`Congratulation, Winner is ${pos1val} `
            disableBtn();
            highlightingWinnigPattern(pattern);
            
          
        }
        }

       }
    }

let turn0=true;
Button.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(turn0){
            button.innerText="O";
            turn0=false;
        }
        else{
            button.innerText="X";
            turn0=true;
        }
        button.disabled=true;
        checkWinner();
         
    })
})