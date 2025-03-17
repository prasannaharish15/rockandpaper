import { useState } from "react"

function Rockpaper(){

    const[uScore,yourScore]=useState(0);
    const[cScore,comScore]=useState(0);
    const[uChoice,yourChoice]=useState("Click Button");
    const[cChoice,comChoice]=useState("Click Button");
    const[arr,myArr]=useState(["Rock","Paper","Sicssor"])
    const[winner,myWinner]=useState("‎");

    function click(ind){
        
        //const myval=ind;
        
        yourChoice(arr[ind]);
        if(true&&winner=="‎"){
            const randomNumCom = Math.floor(Math.random() * 3);
            
            comChoice(arr[randomNumCom]);
        if(ind==randomNumCom){
            
        }else if(ind==0&&randomNumCom==1){
            comScore(cScore=>cScore+1);

        }
        else if(ind==0&&randomNumCom==2){
            yourScore(uScore=>uScore+1);
        }
        else if(ind==1&&randomNumCom==0){
            yourScore(uScore=>uScore+1);
        }
        else if(ind==1&&randomNumCom==2){
            comScore(cScore=>cScore+1);
        }
        else if(ind==2&&randomNumCom==0){
            
            comScore(cScore=>cScore+1);
        }
        else if(ind==2&&randomNumCom==1){
         
            yourScore(uScore=>uScore+1);

        }

        if(uScore>=10){
            myWinner("YOU WON THE MATCH")

        }
        else if(cScore>=10){
            myWinner("COMPUTER WON THE MATCH");

        }
    }




        

    }







    return(
        <>
        <h1 className="head">WELCOME TO ROCK,PAPER,SCISSORS GAME</h1>
        <h1 className="won">{winner}</h1>

        <div className="btn">
            <button onClick={()=>click(0)}>👊Rock</button>
            <button onClick={()=>click(1)}>👋Paper</button>
            <button onClick={()=>click(2)}>✌️Scissors</button>
        </div>

        <h6>Your choice : {uChoice} </h6>
        <h6>Computer's choice : {cChoice} </h6>
        <h3>Your Score : {uScore}</h3>
        <h3>Computer Score : {cScore}</h3>

        
        
        
        </>
    )

}
export default Rockpaper